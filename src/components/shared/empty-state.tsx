import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    description: string;
    actionLabel: string;
    actionHref: string;
}

export function EmptyState({ icon: Icon, title, description, actionLabel, actionHref }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <span className="flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                <Icon className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-base font-semibold text-slate-900">{title}</h2>
            <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>
            {/* <Button asChild className="mt-5 bg-emerald-600 text-white hover:bg-emerald-700">
                <Link href={actionHref}>{actionLabel}</Link>
            </Button> */}
        </div>
    );
}