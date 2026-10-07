import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Category, SortOption } from "@/types";

interface CategoryBarProps {
    categories: Category[];
    activeCategory?: string;
    sort: SortOption;
}

function buildHref(category: string | undefined, sort: SortOption): string {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (sort !== "newest") params.set("sort", sort);
    const query = params.toString();
    return query ? `/?${query}` : "/";
}

const chipBase =
    "flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors duration-150";

export function CategoryBar({ categories, activeCategory, sort }: CategoryBarProps) {
    return (
        <nav aria-label="Danh mục sản phẩm" className="-mx-4 overflow-x-auto px-4">
            <ul className="flex gap-2 pb-1">
                <li>
                    <Link
                        href={buildHref(undefined, sort)}
                        aria-current={!activeCategory ? "page" : undefined}
                        className={cn(
                            chipBase,
                            !activeCategory
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                        )}
                    >
                        <LayoutGrid className="size-4" aria-hidden="true" />
                        Tất cả
                    </Link>
                </li>
                {categories.map(({ id, label, icon: Icon }) => {
                    const isActive = activeCategory === id;
                    return (
                        <li key={id}>
                            <Link
                                href={buildHref(id, sort)}
                                aria-current={isActive ? "page" : undefined}
                                className={cn(
                                    chipBase,
                                    isActive
                                        ? "border-emerald-600 bg-emerald-600 text-white"
                                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                                )}
                            >
                                <Icon className="size-4" aria-hidden="true" />
                                {label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}