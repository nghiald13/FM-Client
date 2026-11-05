import { z } from "zod";
import type {
    BusinessType,
    MerchantAddressDto,
    MerchantAddressFormValues,
    MerchantDto,
    MerchantKycDto,
} from "@/types/onboard";

const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

function isHttpUrl(value: string): boolean {
    try {
        const url = new URL(value);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

function isInRange(value: string, min: number, max: number): boolean {
    if (value === "") return false;
    const num = Number(value);
    return Number.isFinite(num) && num >= min && num <= max;
}

const phone = z
    .string()
    .trim()
    .min(1, "Vui lòng nhập số điện thoại")
    .regex(phoneRegex, "Số điện thoại không hợp lệ");

const requiredText = (message: string, max = 120) =>
    z.string().trim().min(1, message).max(max, `Tối đa ${max} ký tự`);

const requiredUrl = (message: string) =>
    z.string().trim().min(1, message).refine(isHttpUrl, "Đường dẫn không hợp lệ");

const optionalUrl = z
    .string()
    .trim()
    .refine((value) => value === "" || isHttpUrl(value), "Đường dẫn không hợp lệ");

/* Stage 1 */
export const merchantSchema = z.object({
    shopName: requiredText("Vui lòng nhập tên cửa hàng", 60).min(3, "Tên cửa hàng tối thiểu 3 ký tự"),
    description: z.string().trim().max(500, "Mô tả tối đa 500 ký tự"),
    logoUrl: optionalUrl,
    bannerUrl: optionalUrl,
    contactEmail: z.string().trim().min(1, "Vui lòng nhập email liên hệ").email("Email không hợp lệ"),
    contactPhone: phone,
}) satisfies z.ZodType<MerchantDto>;

/* Stage 2 */
const addressBase = z.object({
    label: requiredText("Vui lòng nhập tên gợi nhớ (VD: Kho chính)", 40),
    contactName: requiredText("Vui lòng nhập tên người liên hệ", 60),
    contactPhone: phone,
    province: requiredText("Vui lòng nhập tỉnh/thành"),
    district: requiredText("Vui lòng nhập quận/huyện"),
    ward: requiredText("Vui lòng nhập phường/xã"),
    addressLine: requiredText("Vui lòng nhập số nhà, tên đường", 200),
    isPickup: z.boolean(),
    isReturn: z.boolean(),
    isDefault: z.boolean(),
});

export const merchantAddressFormSchema = addressBase.extend({
    latitude: z.string().trim().refine((v) => isInRange(v, -90, 90), "Vĩ độ hợp lệ từ -90 đến 90"),
    longtitude: z.string().trim().refine((v) => isInRange(v, -180, 180), "Kinh độ hợp lệ từ -180 đến 180"),
}) satisfies z.ZodType<MerchantAddressFormValues>;

export const merchantAddressDtoSchema = addressBase.extend({
    latitude: z.number().min(-90).max(90),
    longtitude: z.number().min(-180).max(180),
}) satisfies z.ZodType<MerchantAddressDto>;

/* Stage 3 */
export const businessTypes: { value: BusinessType; label: string; description: string }[] = [
    { value: "INDIVIDUAL", label: "Cá nhân", description: "Bán hàng với tư cách cá nhân." },
    { value: "HOUSEHOLD", label: "Hộ kinh doanh", description: "Có giấy phép hộ kinh doanh." },
    { value: "COMPANY", label: "Doanh nghiệp", description: "Công ty có đăng ký doanh nghiệp." },
];

export const merchantKycSchema = z
    .object({
        businessType: z.enum(["INDIVIDUAL", "HOUSEHOLD", "COMPANY"]),
        legalName: requiredText("Vui lòng nhập họ tên hoặc tên pháp lý"),
        taxCode: z.string().trim().max(20, "Mã số thuế tối đa 20 ký tự"),
        businessLicenseNo: z.string().trim().max(50, "Số giấy phép tối đa 50 ký tự"),
        businessLicenseUrl: optionalUrl,
        idNumber: z.string().trim().regex(/^(\d{9}|\d{12})$/, "Số CCCD/CMND gồm 9 hoặc 12 chữ số"),
        idFrontUrl: requiredUrl("Vui lòng nhập ảnh mặt trước giấy tờ"),
        idBackUrl: requiredUrl("Vui lòng nhập ảnh mặt sau giấy tờ"),
    })
    .superRefine((values, ctx) => {
        if (values.businessType === "INDIVIDUAL") return;
        if (!values.taxCode) {
            ctx.addIssue({ code: "custom", path: ["taxCode"], message: "Vui lòng nhập mã số thuế" });
        }
        if (!values.businessLicenseNo) {
            ctx.addIssue({ code: "custom", path: ["businessLicenseNo"], message: "Vui lòng nhập số giấy phép" });
        }
        if (!values.businessLicenseUrl) {
            ctx.addIssue({ code: "custom", path: ["businessLicenseUrl"], message: "Vui lòng nhập ảnh giấy phép" });
        }
    }) satisfies z.ZodType<MerchantKycDto>;