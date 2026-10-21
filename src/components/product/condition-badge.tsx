import { cn } from "@/lib/utils";
import type { ProductCondition } from "@/types";

const conditionConfig: Record<ProductCondition, { label: string; className: string }> = {
    new: { label: "Mới", className: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
    "like-new": { label: "Như mới", className: "bg-sky-50 text-sky-700 ring-sky-200" },
    "well-used": { label: "Đã dùng nhiều", className: "bg-amber-50 text-amber-700 ring-amber-200" },
};

interface ConditionBadgeProps {
    condition: ProductCondition;
    className?: string;
}

export function ConditionBadge({ condition, className }: ConditionBadgeProps) {
    const config = conditionConfig[condition];
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-md px-1.5 py-0.5 text-[11px] font-medium ring-1 ring-inset",
                config.className,
                className,
            )}
        >
            {config.label}
        </span>
    );
}