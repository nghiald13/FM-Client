"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart3,
    ClipboardList,
    LayoutDashboard,
    Package,
    Plus,
    Settings,
    ShoppingBag,
    Store,
    type LucideIcon,
} from "lucide-react";
import { Button } "@freemarket/ui/button";
import { cn } from "@freemarket/utils"

interface NavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

const navItems: NavItem[] = [
    { href: "/merchant", label: "Cửa hàng của tôi", icon: Store },
    { href: "/merchant/dashboard", label: "Tổng quan", icon: LayoutDashboard },
    { href: "/merchant/listings", label: "Sản phẩm đang bán", icon: Package },
    { href: "/merchant/orders", label: "Đơn hàng", icon: ClipboardList },
    { href: "/merchant/sales", label: "Doanh thu", icon: BarChart3 },
    { href: "/merchant/settings", label: "Cài đặt cửa hàng", icon: Settings },
];

interface MerchantSidebarProps {
    onNavigate?: () => void;
}

export function MerchantSidebar({ onNavigate }: MerchantSidebarProps) {
    const pathname = usePathname();

    return (
        <div className="flex h-full flex-col gap-4 p-4">
            <div className="px-2 pt-1">
                <p className="text-base font-semibold text-slate-900">Merchant Studio</p>
                <p className="text-xs text-slate-500">Quản lý cửa hàng của bạn</p>
            </div>

            <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href="/merchant/listings/new" onClick={onNavigate}>
                    <Plus className="size-4" />
                    Đăng sản phẩm
                </Link>
            </Button>

            <nav className="flex flex-1 flex-col gap-1" aria-label="Merchant">
                {navItems.map(({ href, label, icon: Icon }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            onClick={onNavigate}
                            aria-current={isActive ? "page" : undefined}
                            className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150",
                                isActive
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                            )}
                        >
                            <Icon className="size-4 shrink-0" />
                            {label}
                        </Link>
                    );
                })}
            </nav>

            <Link
                href="/"
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-md border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors duration-150 hover:bg-slate-50"
            >
                <ShoppingBag className="size-4" />
                Chuyển sang Buyer Mode
            </Link>
        </div>
    );
}