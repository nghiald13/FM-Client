"use client";

import { useRef, useState, type ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { AlertCircle, Clock, Loader2, Mail, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { requestVerifyEmailAction } from "@/actions/verify-actions";
import { Button } from "../../../../../packages/ui/button";
import { Input } from "../../../../../packages/ui/input";
import { useCountdown } from "@/hooks/use-countdown";
import { getLoginErrorMessage } from "@/lib/auth-errors";
import { formatCountdown, maskEmail } from "../../../../../packages/utils/format";
import { cn } from "../../../../../packages/utils/utils";
import { OTP_LENGTH, otpSchema } from "@/lib/validations/verify";
import type { VerifyAccountUser } from "@/types";

const OTP_TTL_SECONDS = 5 * 60;
const RESEND_COOLDOWN_SECONDS = 60;

type BlockReason = "expired" | "locked" | null;

interface VerifyAccountFormProps {
    user: VerifyAccountUser;
    verifyKey: string;
    redirectTo: string;
}

export function VerifyAccountForm({ user, verifyKey, redirectTo }: VerifyAccountFormProps) {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);

    const [otp, setOtp] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [blockReason, setBlockReason] = useState<BlockReason>(null);
    const [isVerifying, setIsVerifying] = useState<boolean>(false);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);

    const ttl = useCountdown(OTP_TTL_SECONDS);
    const cooldown = useCountdown(0);

    const isExpired = blockReason === "expired" || ttl.secondsLeft === 0;
    const isLocked = blockReason === "locked";
    const isBlocked = isExpired || isLocked;
    const maskedEmail = maskEmail(user.email);

    function handleFailure(code: string | null | undefined): void {
        const message = getLoginErrorMessage(code);

        if (code === "invalid_token") {
            setBlockReason("expired");
            toast.error(message);
            return;
        }
        if (code === "mfa_locked") {
            setBlockReason("locked");
            toast.error(message);
            return;
        }

        // incorrect_otp và các lỗi tạm thời: cho nhập lại
        setOtp("");
        setErrorMessage(message);
        toast.error(message);
        inputRef.current?.focus();
    }

    async function submitOtp(code: string): Promise<void> {
        if (isVerifying || isBlocked || isDone) return;

        setIsVerifying(true);
        setErrorMessage(null);
        try {
            const result = await signIn("verify-otp", {
                key: verifyKey,
                otp: code,
                redirect: false,
            });

            if (result && !result.error) {
                setIsDone(true);
                toast.success("Xác minh thành công!");
                router.replace(redirectTo);
                router.refresh();
                return;
            }
            handleFailure(result?.code);
        } catch {
            handleFailure("network_error");
        } finally {
            setIsVerifying(false);
        }
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const digits = event.target.value.replace(/\D/g, "").slice(0, OTP_LENGTH);
        setOtp(digits);
        setErrorMessage(null);
        if (otpSchema.safeParse(digits).success) void submitOtp(digits);
    }

    async function handleResend(): Promise<void> {
        setIsSending(true);
        try {
            const result = await requestVerifyEmailAction(verifyKey);
            if (!result.ok) {
                if (result.code === "invalid_token") setBlockReason("expired");
                toast.error(result.message);
                return;
            }
            cooldown.start(RESEND_COOLDOWN_SECONDS);
            setOtp("");
            setErrorMessage(null);
            toast.success(`Đã gửi mã xác minh đến ${maskedEmail}`);
            inputRef.current?.focus();
        } finally {
            setIsSending(false);
        }
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-3">
                <span className="flex size-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="size-6" aria-hidden="true" />
                </span>
                <div className="space-y-1">
                    <h1 className="text-xl font-bold text-slate-900">Xác minh tài khoản</h1>
                    <p className="text-sm text-slate-500">
                        {user.fullName ? `Xin chào ${user.fullName}. ` : ""}
                        Nhập mã gồm 6 chữ số đã gửi đến{" "}
                        <span className="font-medium text-slate-900">{maskedEmail}</span>.
                    </p>
                </div>
            </div>

            {isBlocked && (
                <div
                    role="alert"
                    className="mb-4 flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
                >
                    <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span>
                        {isLocked
                            ? getLoginErrorMessage("mfa_locked")
                            : "Đã hết thời gian xác minh. Vui lòng đăng nhập lại để nhận mã mới."}
                    </span>
                </div>
            )}

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="otp" className="text-sm font-medium text-slate-900">
                        Mã OTP
                    </label>
                    <span
                        role="timer"
                        className={cn(
                            "flex items-center gap-1 text-xs tabular-nums",
                            isExpired ? "text-rose-600" : "text-slate-500",
                        )}
                    >
                        <Clock className="size-3.5" aria-hidden="true" />
                        {isExpired ? "Đã hết hạn" : `Hết hạn sau ${formatCountdown(ttl.secondsLeft)}`}
                    </span>
                </div>

                <Input
                    id="otp"
                    ref={inputRef}
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    autoComplete="one-time-code"
                    maxLength={OTP_LENGTH}
                    placeholder="••••••"
                    value={otp}
                    onChange={handleChange}
                    readOnly={isVerifying}
                    disabled={isBlocked || isDone}
                    aria-invalid={Boolean(errorMessage)}
                    aria-describedby={errorMessage ? "otp-error" : undefined}
                    className={cn(
                        "h-12 text-center text-xl font-semibold tracking-[0.5em] tabular-nums",
                        errorMessage && "border-rose-400",
                    )}
                />

                {errorMessage && (
                    <p id="otp-error" role="alert" className="text-xs text-rose-600">
                        {errorMessage}
                    </p>
                )}

                {(isVerifying || isDone) && (
                    <p className="flex items-center gap-1.5 text-xs text-slate-500" aria-live="polite">
                        <Loader2 className="size-3.5 animate-spin" aria-hidden="true" />
                        {isDone ? "Đang đăng nhập..." : "Đang xác minh..."}
                    </p>
                )}
            </div>

            <Button
                type="button"
                variant="outline"
                onClick={() => void handleResend()}
                disabled={isSending || isVerifying || isBlocked || isDone || cooldown.secondsLeft > 0}
                className="mt-5 h-11 w-full border-slate-300 bg-white"
            >
                {isSending ? (
                    <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                        Đang gửi...
                    </>
                ) : (
                    <>
                        <Mail className="size-4" aria-hidden="true" />
                        {cooldown.secondsLeft > 0
                            ? `Gửi lại email sau ${cooldown.secondsLeft}s`
                            : "Gửi lại email"}
                    </>
                )}
            </Button>

            {isBlocked ? (
                <Link
                    href="/login"
                    className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-lg bg-emerald-600 px-4 text-sm font-medium text-white transition-colors duration-150 hover:bg-emerald-700"
                >
                    Quay lại đăng nhập
                </Link>
            ) : (
                <p className="mt-5 text-center text-sm text-slate-500">
                    <Link href="/login" className="font-semibold text-emerald-700 hover:underline">
                        Quay lại đăng nhập
                    </Link>
                </p>
            )}
        </div>
    );
}