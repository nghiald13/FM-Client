import type { OnboardStepConfig } from "@/types/onboard";

export const onboardSteps: OnboardStepConfig[] = [
    { id: "shop", label: "Cửa hàng", description: "Giới thiệu cửa hàng và thông tin liên hệ." },
    { id: "address", label: "Địa chỉ", description: "Nơi lấy hàng và nhận hàng hoàn của cửa hàng." },
    { id: "kyc", label: "Xác minh", description: "Xác minh danh tính để bắt đầu bán hàng." },
];