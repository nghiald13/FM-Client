import type { ReactNode } from "react";
import { Store } from "lucide-react";

interface CenteredPageProps {
    children: ReactNode;
    wide?: boolean;
}

export function CenteredPage({ children, wide = false }: CenteredPageProps) {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center px-4 py-10">
            <div className="mb-6 flex items-center gap-2">
                <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <Store className="size-5" aria-hidden="true" />
                </span>
                <span className="text-xl font-bold tracking-tight text-slate-900">FreeMarket</span>
            </div>
            <div className={wide ? "w-full max-w-lg" : "w-full max-w-sm"}>{children}</div>
        </div>
    );
}