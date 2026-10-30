import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { AddToCartButton } from "./add-to-cart-button";
import { ConditionBadge } from "./condition-badge";
import { SellerBadge } from "./seller-badge";
import { WishlistButton } from "./wishlist-button";
import { formatPrice } from "../../../../../packages/utils/format";
import type { Product } from "@/types";

interface ProductCardProps {
    product: Product;
    priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
    const discount =
        product.originalPrice && product.originalPrice > product.price
            ? Math.round((1 - product.price / product.originalPrice) * 100)
            : 0;

    return (
        <article className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="relative">
                <Link href={`/product/${product.id}`} className="block" aria-label={product.title}>
                    <div className="relative aspect-square w-full bg-slate-100">
                        <Image
                            src={product.images[0]}
                            alt={product.title}
                            fill
                            priority={priority}
                            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                            className="object-cover"
                        />
                    </div>
                </Link>
                <ConditionBadge condition={product.condition} className="absolute left-2 top-2 bg-white" />
                <WishlistButton productId={product.id} className="absolute right-2 top-2" />
                {discount > 0 && (
                    <span className="absolute bottom-2 left-2 rounded-md bg-rose-600 px-1.5 py-0.5 text-[11px] font-semibold text-white">
                        -{discount}%
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col gap-2 p-3">
                <Link
                    href={`/product/${product.id}`}
                    className="line-clamp-2 min-h-10 text-sm font-medium leading-5 text-slate-900 hover:underline"
                >
                    {product.title}
                </Link>

                <div>
                    <p className="text-base font-bold text-slate-900">{formatPrice(product.price)}</p>
                    {discount > 0 && product.originalPrice && (
                        <p className="text-xs text-slate-400 line-through">{formatPrice(product.originalPrice)}</p>
                    )}
                </div>

                <div className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin className="size-3 shrink-0" aria-hidden="true" />
                    <span className="truncate">{product.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="shrink-0">{product.postedLabel}</span>
                </div>

                <div className="border-t border-slate-100 pt-2">
                    <SellerBadge seller={product.seller} />
                </div>

                <div className="mt-auto pt-1">
                    <AddToCartButton product={product} />
                </div>
            </div>
        </article>
    );
}