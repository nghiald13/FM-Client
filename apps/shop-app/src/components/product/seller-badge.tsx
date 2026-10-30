import { BadgeCheck, Clock, Star } from "lucide-react";
import { formatCompactNumber } from "@freemarket/utils/src/format";
import type { Seller } from "@/types";

interface SellerBadgeProps {
    seller: Seller;
}

export function SellerBadge({ seller }: SellerBadgeProps) {
    return (
        <div className="space-y-0.5 text-xs text-slate-500">
            <div className="flex items-center gap-1">
                <span className="truncate font-medium text-slate-700">{seller.name}</span>
                {seller.verified && (
                    <BadgeCheck className="size-3.5 shrink-0 text-emerald-600" aria-label="Người bán đã xác minh" />
                )}
            </div>
            <div className="flex items-center gap-1.5">
                <span className="flex items-center gap-0.5">
                    <Star className="size-3 fill-amber-400 text-amber-400" aria-hidden="true" />
                    {seller.rating.toFixed(1)}
                </span>
                <span aria-hidden="true">·</span>
                <span>Đã bán {formatCompactNumber(seller.totalSales)}</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock className="size-3" aria-hidden="true" />
                <span className="truncate">{seller.responseTime}</span>
            </div>
        </div>
    );
}