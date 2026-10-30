"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { AlertCircle, Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../../../../packages/ui/button";
import { Checkbox } from "../../../../../packages/ui/checkbox";
import { Input } from "../../../../../packages/ui/input";
import { Label } from "../../../../../packages/ui/label";
import { getLoginErrorMessage } from "@/lib/auth-errors";
import { cn } from "../../../../../packages/utils/utils";
import { loginSchema } from "@/lib/validations/auth";
import { useLoginPreferencesStore } from "@/stores/use-login-preferences-store";
import type { LoginFormValues } from "@/types";
import { requestVerifyProcessAction } from "@/actions/verify-actions";

interface LoginFormProps {
    redirectTo: string;
}

export function LoginForm({ redirectTo }: LoginFormProps) {
    const router = useRouter();
    const setRememberedEmail = useLoginPreferencesStore((state) => state.setRememberedEmail);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        control,
        handleSubmit,
        setValue,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: { emailOrPhone: "", password: "", rememberMe: false },
    });

    useEffect(() => {
        const rememberedEmail = useLoginPreferencesStore.getState().rememberedEmail;
        if (rememberedEmail) {
            setValue("emailOrPhone", rememberedEmail);
            setValue("rememberMe", true);
        }
    }, [setValue]);

    function showError(message: string): void {
        setError("root", { message });
        toast.error(message);
    }

    async function redirectToVerify(email: string): Promise<void> {
        toast.info("Tài khoản chưa được xác minh. Đang chuyển đến trang xác minh...");
        const result = await requestVerifyProcessAction(email);
        if (!result.ok) {
            showError(result.message);
            return;
        }
        router.push(`/verify?key=${encodeURIComponent(result.data.key)}`);
    }

    async function onSubmit(values: LoginFormValues): Promise<void> {
        const emailOrPhone = values.emailOrPhone.trim();

        const result = await signIn("credentials", {
            emailOrPhone,
            password: values.password,
            redirect: false,
        });

        if (!result || result.error) {
            if (result?.code === "account_inactive") {
                await redirectToVerify(emailOrPhone);
                return;
            }
            showError(getLoginErrorMessage(result?.code));
            return;
        }

        setRememberedEmail(values.rememberMe ? emailOrPhone : "");
        toast.success("Đăng nhập thành công!");
        router.replace(redirectTo);
        router.refresh();
    }

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-1">
                <h1 className="text-xl font-bold text-slate-900">Đăng nhập</h1>
                <p className="text-sm text-slate-500">Mua bán dễ dàng, giao dịch an tâm.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
                {errors.root?.message && (
                    <div
                        role="alert"
                        className="flex items-start gap-2 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2.5 text-sm text-rose-700"
                    >
                        <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                        <span>{errors.root.message}</span>
                    </div>
                )}

                <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        autoComplete="email"
                        inputMode="email"
                        placeholder="ten@email.com"
                        aria-invalid={Boolean(errors.emailOrPhone)}
                        aria-describedby={errors.emailOrPhone ? "email-error" : undefined}
                        className={cn("h-11", errors.emailOrPhone && "border-rose-400")}
                        {...register("emailOrPhone")}
                    />
                    {errors.emailOrPhone && (
                        <p id="email-error" className="text-xs text-rose-600">
                            {errors.emailOrPhone.message}
                        </p>
                    )}
                </div>

                <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="password">Mật khẩu</Label>
                        <Link
                            href="/forgot-password"
                            className="text-xs font-medium text-emerald-700 hover:underline"
                        >
                            Quên mật khẩu?
                        </Link>
                    </div>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            placeholder="Nhập mật khẩu"
                            aria-invalid={Boolean(errors.password)}
                            aria-describedby={errors.password ? "password-error" : undefined}
                            className={cn("h-11 pr-11", errors.password && "border-rose-400")}
                            {...register("password")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                            aria-pressed={showPassword}
                            className="absolute right-1 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-md text-slate-400 transition-colors duration-150 hover:text-slate-700"
                        >
                            {showPassword ? (
                                <EyeOff className="size-4" aria-hidden="true" />
                            ) : (
                                <Eye className="size-4" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                    {errors.password && (
                        <p id="password-error" className="text-xs text-rose-600">
                            {errors.password.message}
                        </p>
                    )}
                </div>

                <Controller
                    control={control}
                    name="rememberMe"
                    render={({ field }) => (
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="rememberMe"
                                checked={field.value}
                                onCheckedChange={(checked) => field.onChange(checked === true)}
                            />
                            <Label htmlFor="rememberMe" className="cursor-pointer text-sm font-normal text-slate-600">
                                Ghi nhớ email của tôi
                            </Label>
                        </div>
                    )}
                />

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 w-full bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                            Đang đăng nhập...
                        </>
                    ) : (
                        <>
                            <LogIn className="size-4" aria-hidden="true" />
                            Đăng nhập
                        </>
                    )}
                </Button>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
                Chưa có tài khoản?{" "}
                <Link href="/register" className="font-semibold text-emerald-700 hover:underline">
                    Đăng ký ngay
                </Link>
            </p>
        </div>
    );
}