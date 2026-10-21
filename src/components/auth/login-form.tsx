"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { AlertCircle, Eye, EyeOff, Loader2, LogIn } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { demoCredentials } from "@/lib/mock-data";
import { authenticate } from "@/lib/mock-auth";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/lib/validations/auth";
import { useAuthStore } from "@/stores/use-auth-store";
import type { LoginFormValues } from "@/types";
import { useAccountsStore } from "@/stores/use-accounts-store";

interface LoginFormProps {
    redirectTo: string;
}

export function LoginForm({ redirectTo }: LoginFormProps) {
    const router = useRouter();
    const login = useAuthStore((state) => state.login);
    const registeredAccounts = useAccountsStore((state) => state.accounts);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        control,
        handleSubmit,
        setValue,
        clearErrors,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "", rememberMe: false },
    });

    useEffect(() => {
        const rememberedEmail = useAuthStore.getState().rememberedEmail;
        if (rememberedEmail) {
            setValue("email", rememberedEmail);
            setValue("rememberMe", true);
        }
    }, [setValue]);

    async function onSubmit(values: LoginFormValues): Promise<void> {
        const result = await authenticate(values.email, values.password, registeredAccounts);
        if (!result.ok) {
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }

        login(result.user, values.rememberMe ? values.email.trim() : "");
        toast.success(`Chào mừng ${result.user.name}!`);
        router.replace(redirectTo);
        router.refresh();
    }

    function fillDemoAccount(): void {
        clearErrors();
        setValue("email", demoCredentials.email, { shouldValidate: true });
        setValue("password", demoCredentials.password, { shouldValidate: true });
        toast.info("Đã điền tài khoản demo");
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
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={cn("h-11", errors.email && "border-rose-400")}
                        {...register("email")}
                    />
                    {errors.email && (
                        <p id="email-error" className="text-xs text-rose-600">
                            {errors.email.message}
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

            <div className="mt-4 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-3">
                <p className="text-xs text-slate-500">
                    Đây là bản demo, không có máy chủ thật. Dùng tài khoản mẫu để thử nhanh:
                </p>
                <p className="mt-1 font-mono text-xs text-slate-700">
                    {demoCredentials.email} / {demoCredentials.password}
                </p>
                <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={fillDemoAccount}
                    className="mt-2 w-full border-slate-300 bg-white"
                >
                    Điền tài khoản demo
                </Button>
            </div>

            <p className="mt-5 text-center text-sm text-slate-500">
                Chưa có tài khoản?{" "}
                <Link href="/register" className="font-semibold text-emerald-700 hover:underline">
                    Đăng ký ngay
                </Link>
            </p>
        </div>
    );
}