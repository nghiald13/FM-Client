"use client";

import { usePathname } from "next/navigation";
import { ShoppingBag, Store } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@freemarket/utils"
import type { AppMode } from "@/types";
import { AppLink } from "@freemarket/ui/app-link";
import { getAppMode, isCrossZone } from "@/lib/navigation";

interface ModeOption {
    mode: AppMode;
    label: string;
    href: string;
    icon: typeof Store;
    toastMessage: string;
}

const options: ModeOption[] = [
    {
        mode: "buyer",
        label: "Mua sắm",
        href: "/",
        icon: ShoppingBag,
        toastMessage: "Đã chuyển sang chế độ Mua sắm",
    },
    {
        mode: "merchant",
        label: "Studio",
        href: "/merchant",
        icon: Store,
        toastMessage: "Đã chuyển sang Merchant Studio",
    },
];

export function ModeSwitcher() {
    const pathname = usePathname();
    const currentMode = getAppMode(pathname);

    return (
        <div
            role="tablist"
            aria-label="Chuyển chế độ tài khoản"
            className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5"
        >
            {options.map(({ mode, label, href, icon: Icon, toastMessage }) => {
                const isActive = currentMode === mode;
                return (
                    <AppLink
                        key={mode}
                        href={href}
                        crossZone={isCrossZone(href)}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => { if (!isActive) toast.info(toastMessage); }}
                        className={cn(
                            "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 sm:text-sm",
                            isActive
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-500 hover:text-slate-900",
                        )}
                    >
                        <Icon className="size-4" aria-hidden="true" />
                        <span>{label}</span>
                    </AppLink>
                );
            })}
        </div>
    );
}