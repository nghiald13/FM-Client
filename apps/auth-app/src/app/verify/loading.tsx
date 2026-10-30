import { Skeleton } from "../../../../packages/ui/skeleton";

export default function VerifyLoading() {
    return (
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <Skeleton className="size-12 rounded-full" />
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-11 w-full" />
            <Skeleton className="h-12 w-full" />
        </div>
    );
}