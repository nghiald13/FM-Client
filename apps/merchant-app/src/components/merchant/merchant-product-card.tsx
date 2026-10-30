"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Badge } from "@freemarket/ui/badge";
import { cn, formatVnd } from "@freemarket/utils"
import type { Product, ProductCondition } from "@/types/merchant";
import { getDefaultVariant } from "@/lib/utils";

const conditionMap: Record<ProductCondition, { label: string; className: string }> = {
    new: { label: "Mới", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    "like-new": { label: "Như mới", className: "bg-sky-50 text-sky-700 border-sky-200" },
    "well-used": { label: "Đã dùng nhiều", className: "bg-amber-50 text-amber-700 border-amber-200" },
};

interface MerchantProductCardProps {
    product: Product;
}

export function MerchantProductCard({ product }: MerchantProductCardProps) {
    const [selectedId, setSelectedId] = useState<string>(getDefaultVariant(product).id);
    const selected =
        product.variants.find((v) => v.id === selectedId) ?? getDefaultVariant(product);
    const condition = conditionMap[product.condition];
    const isOutOfStock = selected.stock === 0;

    return (
        <article className="flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="relative aspect-square bg-slate-100">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="object-cover"
                />
                <Badge
                    variant="outline"
                    className={cn("absolute left-2 top-2 bg-white", condition.className)}
                >
                    {condition.label}
                </Badge>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-3">
                <h3 className="line-clamp-2 text-sm font-medium text-slate-900">{product.title}</h3>

                <p className="text-base font-semibold text-emerald-700">{formatVnd(selected.price)}</p>

                <div className="flex flex-wrap gap-1.5" role="radiogroup" aria-label="Phân loại">
                    {product.variants.map((variant) => {
                        const isActive = variant.id === selected.id;
                        return (
                            <button
                                key={variant.id}
                                type="button"
                                role="radio"
                                aria-checked={isActive}
                                onClick={() => setSelectedId(variant.id)}
                                className={cn(
                                    "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs transition-colors duration-150",
                                    isActive
                                        ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                                        : "border-slate-200 text-slate-600 hover:border-slate-300",
                                    variant.stock === 0 && "text-slate-400 line-through"
                                )}
                            >
                                {variant.colorHex && (
                                    <span
                                        className="size-2.5 rounded-full border border-slate-300"
                                        style={{ backgroundColor: variant.colorHex }}
                                    />
                                )}
                                {variant.name}
                            </button>
                        );
                    })}
                </div>

                <p className="text-xs text-slate-500">
                    {selected.isDefault ? "Phân loại mặc định · " : ""}
                    {isOutOfStock ? (
                        <span className="font-medium text-rose-600">Hết hàng</span>
                    ) : (
                        <>Còn {selected.stock}</>
                    )}
                    {" · "}SKU {selected.sku}
                </p>

                <p className="mt-auto flex items-center gap-1 pt-1 text-xs text-slate-500">
                    <MapPin className="size-3" />
                    {product.location} · Đã bán {product.sold}
                </p>
            </div>
        </article>
    );
}