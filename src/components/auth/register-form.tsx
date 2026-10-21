"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Loader2, UserPlus } from "lucide-react";
import { toast } from "sonner";
import { FormField } from "@/components/auth/form-field";
import { PasswordStrength } from "@/components/auth/password-strength";
import { RegisterProgress } from "@/components/auth/register-progress";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { intentOptions, registerSteps, vietnamCities } from "@/lib/constants";
import { registerAccount } from "@/lib/mock-auth";
import { cn } from "@/lib/utils";
import { registerSchema, registerStepFields } from "@/lib/validations/auth";
import { useAccountsStore } from "@/stores/use-accounts-store";
import type { RegisterFormValues } from "@/types";

const LAST_STEP = registerSteps.length - 1;

const selectClassName =
    "h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-colors duration-150 focus-visible:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-600/30";

export function RegisterForm() {
    const router = useRouter();
    const registeredAccounts = useAccountsStore((state) => state.accounts);
    const addAccount = useAccountsStore((state) => state.addAccount);

    const [step, setStep] = useState<number>(0);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const {
        register,
        control,
        handleSubmit,
        trigger,
        setError,
        getValues,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: "onTouched",
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phone: "",
            city: "",
            intent: "buy",
            acceptTerms: false,
        },
    });

    const passwordValue = watch("password");
    const summary = watch();

    async function handleNext(): Promise<void> {
        const isValid = await trigger(registerStepFields[step]);
        if (!isValid) return;

        if (step === 0 && getValues("password") !== getValues("confirmPassword")) {
            setError("confirmPassword", { message: "Mật khẩu xác nhận không khớp" });
            return;
        }

        setStep((current) => Math.min(current + 1, LAST_STEP));
    }

    function handleBack(): void {
        setStep((current) => Math.max(current - 1, 0));
    }

    function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        if (step < LAST_STEP) {
            void handleNext();
            return;
        }
        void handleSubmit(onSubmit)(event);
    }

    async function onSubmit(values: RegisterFormValues): Promise<void> {
        const result = await registerAccount(values, registeredAccounts);

        if (!result.ok) {
            setStep(0);
            setError("email", { message: result.message });
            toast.error(result.message);
            return;
        }

        addAccount(result.account);
        toast.success("Đăng ký thành công! Vui lòng đăng nhập.");
        router.replace("/login");
    }

    const currentIntentLabel =
        intentOptions.find((option) => option.value === summary.intent)?.label ?? "";

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-1">
                <h1 className="text-xl font-bold text-slate-900">Tạo tài khoản</h1>
                <p className="text-sm text-slate-500">{registerSteps[step].description}</p>
            </div>

            <div className="mb-6">
                <RegisterProgress steps={registerSteps} currentStep={step} />
            </div>

            <form onSubmit={handleFormSubmit} noValidate className="space-y-4">
                {step === 0 && (
                    <div className="space-y-4">
                        <FormField id="fullName" label="Họ và tên" error={errors.fullName?.message}>
                            <Input
                                id="fullName"
                                autoComplete="name"
                                placeholder="Nguyễn Văn A"
                                aria-invalid={Boolean(errors.fullName)}
                                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                className={cn("h-11", errors.fullName && "border-rose-400")}
                                {...register("fullName")}
                            />
                        </FormField>

                        <FormField id="email" label="Email" error={errors.email?.message}>
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
                        </FormField>

                        <FormField
                            id="password"
                            label="Mật khẩu"
                            error={errors.password?.message}
                            hint="Tối thiểu 8 ký tự, gồm chữ và số."
                        >
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    placeholder="Tạo mật khẩu"
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
                            <PasswordStrength password={passwordValue} />
                        </FormField>

                        <FormField
                            id="confirmPassword"
                            label="Nhập lại mật khẩu"
                            error={errors.confirmPassword?.message}
                        >
                            <Input
                                id="confirmPassword"
                                type={showPassword ? "text" : "password"}
                                autoComplete="new-password"
                                placeholder="Nhập lại mật khẩu"
                                aria-invalid={Boolean(errors.confirmPassword)}
                                aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                                className={cn("h-11", errors.confirmPassword && "border-rose-400")}
                                {...register("confirmPassword")}
                            />
                        </FormField>
                    </div>
                )}

                {step === 1 && (
                    <div className="space-y-4">
                        <FormField
                            id="phone"
                            label="Số điện thoại"
                            error={errors.phone?.message}
                            hint="Dùng để người mua và người bán liên hệ khi giao dịch."
                        >
                            <Input
                                id="phone"
                                type="tel"
                                autoComplete="tel"
                                inputMode="tel"
                                placeholder="0901234567"
                                aria-invalid={Boolean(errors.phone)}
                                aria-describedby={errors.phone ? "phone-error" : undefined}
                                className={cn("h-11", errors.phone && "border-rose-400")}
                                {...register("phone")}
                            />
                        </FormField>

                        <FormField id="city" label="Tỉnh/Thành phố" error={errors.city?.message}>
                            <select
                                id="city"
                                aria-invalid={Boolean(errors.city)}
                                aria-describedby={errors.city ? "city-error" : undefined}
                                className={cn(selectClassName, errors.city && "border-rose-400")}
                                {...register("city")}
                            >
                                <option value="">Chọn tỉnh/thành</option>
                                {vietnamCities.map((city) => (
                                    <option key={city} value={city}>
                                        {city}
                                    </option>
                                ))}
                            </select>
                        </FormField>

                        <fieldset className="space-y-2">
                            <legend className="mb-1.5 text-sm font-medium text-slate-900">
                                Bạn muốn làm gì trên FreeMarket?
                            </legend>
                            {intentOptions.map(({ value, label, description, icon: Icon }) => (
                                <label
                                    key={value}
                                    className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-colors duration-150 hover:bg-slate-50 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald-600/40"
                                >
                                    <input type="radio" value={value} className="sr-only" {...register("intent")} />
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 group-has-[:checked]:bg-emerald-100 group-has-[:checked]:text-emerald-700">
                                        <Icon className="size-4" aria-hidden="true" />
                                    </span>
                                    <span className="min-w-0 flex-1">
                                        <span className="block text-sm font-medium text-slate-900">{label}</span>
                                        <span className="block text-xs text-slate-500">{description}</span>
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="size-4 shrink-0 rounded-full border border-slate-300 bg-white group-has-[:checked]:border-[5px] group-has-[:checked]:border-emerald-600"
                                    />
                                </label>
                            ))}
                        </fieldset>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <dl className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-slate-50/60 text-sm">
                            {[
                                { label: "Họ và tên", value: summary.fullName },
                                { label: "Email", value: summary.email },
                                { label: "Số điện thoại", value: summary.phone },
                                { label: "Tỉnh/Thành phố", value: summary.city },
                                { label: "Mục đích", value: currentIntentLabel },
                            ].map((row) => (
                                <div key={row.label} className="flex items-start justify-between gap-4 px-3 py-2.5">
                                    <dt className="shrink-0 text-slate-500">{row.label}</dt>
                                    <dd className="break-all text-right font-medium text-slate-900">{row.value}</dd>
                                </div>
                            ))}
                        </dl>

                        <Controller
                            control={control}
                            name="acceptTerms"
                            render={({ field }) => (
                                <div className="space-y-1.5">
                                    <div className="flex items-start gap-2">
                                        <Checkbox
                                            id="acceptTerms"
                                            checked={field.value}
                                            onCheckedChange={(checked) => field.onChange(checked === true)}
                                            aria-invalid={Boolean(errors.acceptTerms)}
                                            aria-describedby={errors.acceptTerms ? "acceptTerms-error" : undefined}
                                            className="mt-0.5"
                                        />
                                        <label
                                            htmlFor="acceptTerms"
                                            className="cursor-pointer text-sm leading-5 text-slate-600"
                                        >
                                            Tôi đồng ý với{" "}
                                            <Link href="/terms" className="font-medium text-emerald-700 hover:underline">
                                                Điều khoản sử dụng
                                            </Link>{" "}
                                            và{" "}
                                            <Link href="/privacy" className="font-medium text-emerald-700 hover:underline">
                                                Chính sách bảo mật
                                            </Link>
                                            .
                                        </label>
                                    </div>
                                    {errors.acceptTerms && (
                                        <p id="acceptTerms-error" className="text-xs text-rose-600">
                                            {errors.acceptTerms.message}
                                        </p>
                                    )}
                                </div>
                            )}
                        />
                    </div>
                )}

                <div className="flex items-center gap-2 pt-2">
                    {step > 0 && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleBack}
                            disabled={isSubmitting}
                            className="h-11 border-slate-300 bg-white"
                        >
                            <ArrowLeft className="size-4" aria-hidden="true" />
                            Quay lại
                        </Button>
                    )}

                    {step < LAST_STEP ? (
                        <Button
                            key="next"
                            type="button"
                            onClick={() => void handleNext()}
                            className="h-11 flex-1 bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
                        >
                            Tiếp tục
                            <ArrowRight className="size-4" aria-hidden="true" />
                        </Button>
                    ) : (
                        <Button
                            key="submit"
                            type="submit"
                            disabled={isSubmitting}
                            className="h-11 flex-1 bg-emerald-600 text-white transition-colors duration-150 hover:bg-emerald-700"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                                    Đang tạo tài khoản...
                                </>
                            ) : (
                                <>
                                    <UserPlus className="size-4" aria-hidden="true" />
                                    Hoàn tất đăng ký
                                </>
                            )}
                        </Button>
                    )}
                </div>
            </form>

            <p className="mt-5 text-center text-sm text-slate-500">
                Đã có tài khoản?{" "}
                <Link href="/login" className="font-semibold text-emerald-700 hover:underline">
                    Đăng nhập
                </Link>
            </p>
        </div>
    );
}