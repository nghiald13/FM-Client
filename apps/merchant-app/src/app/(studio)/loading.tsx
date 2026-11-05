import { Skeleton } from "@freemarket/ui/skeleton";

export default function MerchantLoading() {
    return (
        <div>
            <Skeleton className="h-36 w-full rounded-none sm:h-52" />
            <div className="px-4 sm:px-6">
                <Skeleton className="-mt-10 size-20 rounded-full ring-4 ring-white sm:size-24" />
                <Skeleton className="mt-3 h-6 w-48" />
                <Skeleton className="mt-2 h-4 w-full max-w-md" />
                <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {Array.from({ length: 4 }, (_, i) => (
                        <Skeleton key={i} className="h-24 w-full" />
                    ))}
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 8 }, (_, i) => (
                        <div key={i} className="space-y-2">
                            <Skeleton className="aspect-square w-full" />
                            <Skeleton className="h-4 w-3/4" />
                            <Skeleton className="h-4 w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}