import { Skeleton } from "../../../../../packages/ui/skeleton";

export function ProductCardSkeleton() {
    return (
        <div className="space-y-3 overflow-hidden rounded-xl border border-slate-200 bg-white pb-3">
            <Skeleton className="aspect-square w-full rounded-none" />
            <div className="space-y-2 px-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-5 w-1/2" />
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-8 w-full" />
            </div>
        </div>
    );
}