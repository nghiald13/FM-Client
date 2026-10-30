"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { PackageOpen } from "lucide-react";
import { Button } from "../../../../../packages/ui/button";
import { MerchantProductCard } from "@/components/merchant/merchant-product-card";
import { cn } from "../../../../../packages/utils/utils";
import type { Product, ProductCategory } from "@/types/merchant";

interface MerchantProductsProps {
    categories: ProductCategory[];
    products: Product[];
}

const ALL = "all";

export function MerchantProducts({ categories, products }: MerchantProductsProps) {
    const [activeId, setActiveId] = useState<string>(ALL);

    const groups = useMemo(
        () =>
            categories
                .filter((c) => activeId === ALL || c.id === activeId)
                .map((category) => ({
                    category,
                    items: products.filter((p) => p.categoryId === category.id),
                }))
                .filter((g) => g.items.length > 0),
        [categories, products, activeId]
    );

    const chips: ProductCategory[] = [{ id: ALL, name: "Tất cả" }, ...categories];

    return (
        <section className="px-4 py-5 sm:px-6">
            <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold text-slate-900">Sản phẩm đang bán</h2>
                <span className="text-sm text-slate-500">{products.length} sản phẩm</span>
            </div>

            <div className="-mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
                {chips.map((chip) => (
                    <button
                        key={chip.id}
                        type="button"
                        onClick={() => setActiveId(chip.id)}
                        className={cn(
                            "shrink-0 rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-150",
                            activeId === chip.id
                                ? "border-emerald-600 bg-emerald-600 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        )}
                    >
                        {chip.name}
                    </button>
                ))}
            </div>

            {groups.length === 0 ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-12 text-center">
                    <PackageOpen className="size-10 text-slate-400" />
                    <p className="text-sm text-slate-600">Chưa có sản phẩm nào đang bán.</p>
                    <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                        <Link href="/merchant/listings/new">Đăng sản phẩm đầu tiên</Link>
                    </Button>
                </div>
            ) : (
                <div className="mt-5 flex flex-col gap-8">
                    {groups.map(({ category, items }) => (
                        <div key={category.id}>
                            <h3 className="mb-3 text-base font-medium text-slate-900">
                                {category.name}
                                <span className="ml-2 text-sm font-normal text-slate-500">({items.length})</span>
                            </h3>
                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                                {items.map((product) => (
                                    <MerchantProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}