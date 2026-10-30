import { ShoppingBag, Store, Repeat } from "lucide-react";
import type { IntentOption, RegisterStepConfig } from "@/types";

export const registerSteps: RegisterStepConfig[] = [
    { id: "account", label: "Tài khoản", description: "Tạo thông tin đăng nhập của bạn." },
    { id: "profile", label: "Thông tin", description: "Giúp người mua và người bán tin tưởng bạn hơn." },
    { id: "confirm", label: "Xác nhận", description: "Kiểm tra lại và hoàn tất đăng ký." },
];

export const intentOptions: IntentOption[] = [
    { value: "buy", label: "Mua sắm", description: "Tìm đồ mới và đồ cũ giá tốt.", icon: ShoppingBag },
    { value: "sell", label: "Bán hàng", description: "Đăng bán nhanh, quản lý đơn trong Studio.", icon: Store },
    { value: "both", label: "Cả hai", description: "Vừa mua vừa bán, chuyển chế độ bất kỳ lúc nào.", icon: Repeat },
];

export const vietnamCities: string[] = [
    "TP. Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Cần Thơ",
    "Hải Phòng",
    "Huế",
    "Nha Trang",
    "Đà Lạt",
    "Vũng Tàu",
    "Biên Hòa",
    "Khác",
];

export const DEFAULT_AVATAR =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80";