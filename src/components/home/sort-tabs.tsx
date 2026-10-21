import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SortOption } from "@/types";

interface SortTabsProps {
    activeSort: SortOption;
    category?: string;
}

const sortOptions: { value: SortOption; label: string }[] = [
    { value: "newest", label: "Mới nhất" },
    { value: "price-asc", label: "Giá thấp" },
    { value: "price-desc", label: "Giá cao" },
];

function buildHref(category: string | undefined, sort: SortOption): string {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (sort !== "newest") params.set("sort", sort);
    const query = params.toString();
    return query ? `/?${query}` : "/";
}

export function SortTabs({ activeSort, category }: SortTabsProps) {
    return (
        <div
            role="group"
            aria-label="Sắp xếp sản phẩm"
            className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5"
        >
            {sortOptions.map(({ value, label }) => {
                const isActive = activeSort === value;
                return (
                    <Link
                        key={value}
                        href={buildHref(category, value)}
                        aria-current={isActive ? "true" : undefined}
                        className={cn(
                            "rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors duration-150 sm:text-sm",
                            isActive ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900",
                        )}
                    >
                        {label}
                    </Link>
                );
            })}
        </div>
    );
}