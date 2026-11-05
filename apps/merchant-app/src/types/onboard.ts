export interface MerchantProfile {
    shopName: string;
    description?: string | null;
    logoUrl?: string | null;
    bannerUrl?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
}

export type MerchantState =
    | { status: "active"; merchant: MerchantProfile }
    | { status: "pending" }
    | { status: "not_onboarded" }
    | { status: "error"; message: string };

export interface MerchantDto {
    shopName: string;
    description: string;
    logoUrl: string;
    bannerUrl: string;
    contactEmail: string;
    contactPhone: string;
}

export interface MerchantAddressDto {
    label: string;
    contactName: string;
    contactPhone: string;
    province: string;
    district: string;
    ward: string;
    addressLine: string;
    latitude: number;
    longtitude: number;
    isPickup: boolean;
    isReturn: boolean;
    isDefault: boolean;
}

/** Form giữ toạ độ dạng chuỗi để nhập liệu; chuyển sang số trước khi gửi. */
export type MerchantAddressFormValues = Omit<MerchantAddressDto, "latitude" | "longtitude"> & {
    latitude: string;
    longtitude: string;
};

export type BusinessType = "INDIVIDUAL" | "HOUSEHOLD" | "COMPANY";

export interface MerchantKycDto {
    businessType: BusinessType;
    legalName: string;
    taxCode: string;
    businessLicenseNo: string;
    businessLicenseUrl: string;
    idNumber: string;
    idFrontUrl: string;
    idBackUrl: string;
}

export type OnboardStage = "stage1" | "stage2" | "stage3";

export interface ActionFailure {
    ok: false;
    message: string;
    /** pending: hồ sơ đã nộp và đang thụ lý. unauthorized: hết phiên đăng nhập. */
    code?: "pending" | "unauthorized";
}

export type ActionResult = { ok: true } | ActionFailure;

export interface OnboardStepConfig {
    id: string;
    label: string;
    description: string;
}

export interface StageFormProps {
    onSuccess: () => void;
    onPending: () => void;
}