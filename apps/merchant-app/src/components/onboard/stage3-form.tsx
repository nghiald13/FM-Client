"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitStage3Action } from "@/actions/onboard-actions";
import { FormError, StageActions, TextField } from "@/components/onboard/form-field";
import { businessTypes, merchantKycSchema } from "@/lib/validations/onboard";
import type { MerchantKycDto, StageFormProps } from "@/types/onboard";

export function Stage3Form({ onSuccess, onPending }: StageFormProps) {
    const {
        register,
        handleSubmit,
        setError,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<MerchantKycDto>({
        resolver: zodResolver(merchantKycSchema),
        mode: "onTouched",
        defaultValues: {
            businessType: "INDIVIDUAL",
            legalName: "",
            taxCode: "",
            businessLicenseNo: "",
            businessLicenseUrl: "",
            idNumber: "",
            idFrontUrl: "",
            idBackUrl: "",
        },
    });

    const businessType = watch("businessType");
    const isBusiness = businessType !== "INDIVIDUAL";

    async function onSubmit(values: MerchantKycDto): Promise<void> {
        const result = await submitStage3Action(values);
        if (!result.ok) {
            if (result.code === "pending") {
                onPending();
                return;
            }
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }
        toast.success("Đã gửi hồ sơ xác minh!");
        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <FormError message={errors.root?.message} />

            <fieldset className="space-y-2">
                <legend className="mb-1.5 text-sm font-medium text-slate-900">Hình thức kinh doanh</legend>
                {businessTypes.map(({ value, label, description }) => (
                    <label
                        key={value}
                        className="group flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-colors duration-150 hover:bg-slate-50 has-[:checked]:border-emerald-600 has-[:checked]:bg-emerald-50/60 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-emerald-600/40"
                    >
                        <input type="radio" value={value} className="sr-only" {...register("businessType")} />
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

            <TextField
                id="legalName"
                label={isBusiness ? "Tên pháp lý" : "Họ tên theo giấy tờ"}
                error={errors.legalName?.message}
                {...register("legalName")}
            />

            {isBusiness && (
                <div className="space-y-4">
                    <TextField id="taxCode" label="Mã số thuế" inputMode="numeric" error={errors.taxCode?.message} {...register("taxCode")} />
                    <TextField
                        id="businessLicenseNo"
                        label="Số giấy phép kinh doanh"
                        error={errors.businessLicenseNo?.message}
                        {...register("businessLicenseNo")}
                    />
                    <TextField
                        id="businessLicenseUrl"
                        label="Đường dẫn ảnh giấy phép kinh doanh"
                        type="url"
                        inputMode="url"
                        placeholder="https://..."
                        error={errors.businessLicenseUrl?.message}
                        {...register("businessLicenseUrl")}
                    />
                </div>
            )}

            <TextField
                id="idNumber"
                label="Số CCCD/CMND"
                inputMode="numeric"
                hint="9 hoặc 12 chữ số."
                error={errors.idNumber?.message}
                {...register("idNumber")}
            />
            <TextField
                id="idFrontUrl"
                label="Đường dẫn ảnh mặt trước"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.idFrontUrl?.message}
                {...register("idFrontUrl")}
            />
            <TextField
                id="idBackUrl"
                label="Đường dẫn ảnh mặt sau"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.idBackUrl?.message}
                {...register("idBackUrl")}
            />

            <StageActions isSubmitting={isSubmitting} submitLabel="Gửi hồ sơ" submittingLabel="Đang gửi hồ sơ..." />
        </form>
    );
}