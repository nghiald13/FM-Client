"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAppMode, getNavItems, isNavActive } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function BottomNav() {
    const pathname = usePathname();
    const items = getNavItems(getAppMode(pathname));

    return (
        <nav
            aria-label="Điều hướng di động"
            className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white pb-[env(safe-area-inset-bottom)] md:hidden"
        >
            <ul className="mx-auto grid h-16 max-w-lg grid-cols-5 items-center">
                {items.map((item) => {
                    const isActive = isNavActive(pathname, item);
                    const Icon = item.icon;
                    return (
                        <li key={item.href} className="flex justify-center">
                            <Link
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className="flex flex-col items-center gap-0.5 px-2 py-1 text-[11px] font-medium"
                            >
                                {item.highlight ? (
                                    <span className="flex size-11 -translate-y-2 items-center justify-center rounded-full bg-emerald-600 text-white transition-colors duration-150 active:bg-emerald-700">
                                        <Icon className="size-6" aria-hidden="true" />
                                        <span className="sr-only">{item.label}</span>
                                    </span>
                                ) : (
                                    <>
                                        <Icon
                                            className={cn(
                                                "size-5 transition-colors duration-150",
                                                isActive ? "text-emerald-600" : "text-slate-500",
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span className={isActive ? "text-emerald-700" : "text-slate-500"}>
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}