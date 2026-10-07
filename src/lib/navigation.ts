import type { AppMode, NavItem } from "@/types";
import {
    ClipboardList,
    Home,
    LayoutDashboard,
    MessageCircle,
    Package,
    PlusCircle,
    Search,
    User,
} from "lucide-react";

export const buyerNav: NavItem[] = [
    { label: "Trang chủ", href: "/", icon: Home, exact: true },
    { label: "Tìm kiếm", href: "/search", icon: Search },
    { label: "Đăng bán", href: "/sell", icon: PlusCircle, highlight: true },
    { label: "Tin nhắn", href: "/messages", icon: MessageCircle },
    { label: "Cá nhân", href: "/profile", icon: User },
];

export const merchantNav: NavItem[] = [
    { label: "Tổng quan", href: "/studio", icon: LayoutDashboard, exact: true },
    { label: "Tin đăng", href: "/studio/listings", icon: Package },
    { label: "Đăng bán", href: "/sell", icon: PlusCircle, highlight: true },
    { label: "Đơn hàng", href: "/studio/orders", icon: ClipboardList },
    { label: "Tin nhắn", href: "/messages", icon: MessageCircle },
];

export function getAppMode(pathname: string): AppMode {
    return pathname.startsWith("/studio") || pathname.startsWith("/sell")
        ? "merchant"
        : "buyer";
}

export function getNavItems(mode: AppMode): NavItem[] {
    return mode === "merchant" ? merchantNav : buyerNav;
}

export function isNavActive(pathname: string, item: NavItem): boolean {
    if (item.exact) return pathname === item.href;
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
}