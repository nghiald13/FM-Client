"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAppMode, getNavItems, isNavActive } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav() {
    const pathname = usePathname();
    const items = getNavItems(getAppMode(pathname));

    return (
        <nav aria-label="Điều hướng chính" className="hidden items-center gap-1 md:flex">
            {items.map((item) => {
                const isActive = isNavActive(pathname, item);
                const Icon = item.icon;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                            "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150",
                            item.highlight
                                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                                : isActive
                                    ? "bg-slate-100 text-slate-900"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                        )}
                    >
                        <Icon className="size-4" aria-hidden="true" />
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}