"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { LocateFixed } from "lucide-react";
import { toast } from "sonner";
import { submitStage2Action } from "@/actions/onboard-actions";
import { FormError, StageActions, TextField } from "@/components/onboard/form-field";
import { Button } from "@freemarket/ui/button";
import { Checkbox } from "@freemarket/ui/checkbox";
import { Label } from "@freemarket/ui/label";
import { merchantAddressFormSchema } from "@/lib/validations/onboard";
import type { MerchantAddressFormValues, StageFormProps } from "@/types/onboard";

type FlagName = "isPickup" | "isReturn" | "isDefault";

const flags: { name: FlagName; label: string; hint: string }[] = [
    { name: "isPickup", label: "Địa chỉ lấy hàng", hint: "Đơn vị vận chuyển sẽ đến lấy hàng tại đây." },
    { name: "isReturn", label: "Địa chỉ nhận hàng hoàn", hint: "Hàng bị trả lại sẽ gửi về đây." },
    { name: "isDefault", label: "Đặt làm địa chỉ mặc định", hint: "Dùng cho các đơn hàng mới." },
];

export function Stage2Form({ onSuccess, onPending }: StageFormProps) {
    const {
        register,
        control,
        handleSubmit,
        setValue,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<MerchantAddressFormValues>({
        resolver: zodResolver(merchantAddressFormSchema),
        mode: "onTouched",
        defaultValues: {
            label: "",
            contactName: "",
            contactPhone: "",
            province: "",
            district: "",
            ward: "",
            addressLine: "",
            latitude: "",
            longtitude: "",
            isPickup: true,
            isReturn: true,
            isDefault: true,
        },
    });

    function handleLocate(): void {
        if (!navigator.geolocation) {
            toast.info("Trình duyệt không hỗ trợ định vị. Vui lòng nhập thủ công.");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setValue("latitude", position.coords.latitude.toFixed(6), { shouldValidate: true });
                setValue("longtitude", position.coords.longitude.toFixed(6), { shouldValidate: true });
                toast.success("Đã lấy vị trí hiện tại");
            },
            () => toast.info("Không thể lấy vị trí. Vui lòng nhập thủ công."),
        );
    }

    async function onSubmit(values: MerchantAddressFormValues): Promise<void> {
        const result = await submitStage2Action({
            ...values,
            latitude: Number(values.latitude),
            longtitude: Number(values.longtitude),
        });
        if (!result.ok) {
            if (result.code === "pending") {
                onPending();
                return;
            }
            setError("root", { message: result.message });
            toast.error(result.message);
            return;
        }
        toast.success("Đã lưu địa chỉ cửa hàng");
        onSuccess();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <FormError message={errors.root?.message} />

            <TextField
                id="label"
                label="Tên gợi nhớ"
                placeholder="VD: Kho chính"
                error={errors.label?.message}
                {...register("label")}
            />

            <div className="grid gap-4 sm:grid-cols-2">
                <TextField
                    id="contactName"
                    label="Người liên hệ"
                    autoComplete="name"
                    placeholder="Nguyễn Văn A"
                    error={errors.contactName?.message}
                    {...register("contactName")}
                />
                <TextField
                    id="addressPhone"
                    label="Số điện thoại"
                    type="tel"
                    inputMode="tel"
                    placeholder="0901234567"
                    error={errors.contactPhone?.message}
                    {...register("contactPhone")}
                />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
                <TextField id="province" label="Tỉnh/Thành phố" error={errors.province?.message} {...register("province")} />
                <TextField id="district" label="Quận/Huyện" error={errors.district?.message} {...register("district")} />
                <TextField id="ward" label="Phường/Xã" error={errors.ward?.message} {...register("ward")} />
            </div>

            <TextField
                id="addressLine"
                label="Số nhà, tên đường"
                autoComplete="street-address"
                error={errors.addressLine?.message}
                {...register("addressLine")}
            />

            <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-slate-900">Toạ độ</span>
                    <Button type="button" variant="outline" size="sm" onClick={handleLocate}>
                        <LocateFixed className="size-4" aria-hidden="true" />
                        Lấy vị trí hiện tại
                    </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <TextField
                        id="latitude"
                        label="Vĩ độ (latitude)"
                        inputMode="decimal"
                        placeholder="10.776889"
                        error={errors.latitude?.message}
                        {...register("latitude")}
                    />
                    <TextField
                        id="longtitude"
                        label="Kinh độ (longitude)"
                        inputMode="decimal"
                        placeholder="106.700806"
                        error={errors.longtitude?.message}
                        {...register("longtitude")}
                    />
                </div>
            </div>

            <fieldset className="space-y-3 rounded-lg border border-slate-200 bg-slate-50/60 p-3">
                <legend className="px-1 text-sm font-medium text-slate-900">Mục đích sử dụng</legend>
                {flags.map(({ name, label, hint }) => (
                    <Controller
                        key={name}
                        control={control}
                        name={name}
                        render={({ field }) => (
                            <div className="flex items-start gap-2.5">
                                <Checkbox
                                    id={name}
                                    checked={field.value}
                                    onCheckedChange={(checked) => field.onChange(checked === true)}
                                    className="mt-0.5"
                                />
                                <div className="space-y-0.5">
                                    <Label htmlFor={name} className="cursor-pointer">
                                        {label}
                                    </Label>
                                    <p className="text-xs text-slate-500">{hint}</p>
                                </div>
                            </div>
                        )}
                    />
                ))}
            </fieldset>

            <StageActions isSubmitting={isSubmitting} submitLabel="Lưu và tiếp tục" submittingLabel="Đang lưu..." />
        </form>
    );
}