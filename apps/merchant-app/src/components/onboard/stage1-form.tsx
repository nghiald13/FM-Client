"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitStage1Action } from "@/actions/onboard-actions";
import {
    FormError,
    FormField,
    StageActions,
    TextField,
    nativeControlClass,
} from "@/components/onboard/form-field";
import { cn } from "@freemarket/utils";
import { merchantSchema } from "@/lib/validations/onboard";
import type { MerchantDto, StageFormProps } from "@/types/onboard";

export function Stage1Form({ onSuccess, onPending }: StageFormProps) {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<MerchantDto>({
        resolver: zodResolver(merchantSchema),
        mode: "onTouched",
        defaultValues: {
            shopName: "",
            description: "",
            logoUrl: "",
            bannerUrl: "",
            contactEmail: "",
            contactPhone: "",
        },
    });

    async function onSubmit(values: MerchantDto): Promise<void> {
        const result = await submitStage1Action(values);
        if (!result.ok) {
            if (result.code === "pending") {
                onPending();
                return;
            }
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }
        toast.success("Đã lưu thông tin cửa hàng");
        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <FormError message={errors.root?.message} />

            <TextField
                id="shopName"
                label="Tên cửa hàng"
                placeholder="VD: Minh Anh Store"
                error={errors.shopName?.message}
                {...register("shopName")}
            />

            <FormField
                id="description"
                label="Mô tả cửa hàng"
                error={errors.description?.message}
                hint="Giới thiệu ngắn về sản phẩm và cách bạn bán hàng."
            >
                <textarea
                    id="description"
                    rows={4}
                    aria-invalid={Boolean(errors.description)}
                    aria-describedby={errors.description ? "description-error" : undefined}
                    className={cn(nativeControlClass, "resize-none py-2.5", errors.description && "border-rose-400")}
                    {...register("description")}
                />
            </FormField>

            <TextField
                id="logoUrl"
                label="Đường dẫn ảnh đại diện (logo)"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.logoUrl?.message}
                {...register("logoUrl")}
            />

            <TextField
                id="bannerUrl"
                label="Đường dẫn ảnh bìa"
                type="url"
                inputMode="url"
                placeholder="https://..."
                error={errors.bannerUrl?.message}
                {...register("bannerUrl")}
            />

            <TextField
                id="contactEmail"
                label="Email liên hệ"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="shop@email.com"
                error={errors.contactEmail?.message}
                {...register("contactEmail")}
            />

            <TextField
                id="contactPhone"
                label="Số điện thoại liên hệ"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                placeholder="0901234567"
                error={errors.contactPhone?.message}
                {...register("contactPhone")}
            />

            <StageActions isSubmitting={isSubmitting} submitLabel="Lưu và tiếp tục" submittingLabel="Đang lưu..." />
        </form>
    );
}