import { ClipboardList, Package, Star, Wallet, type LucideIcon } from "lucide-react";
import type { DashboardStat, DashboardStatId } from "@/types/dashboard";

const icons: Record<DashboardStatId, LucideIcon> = {
    revenue: Wallet,
    orders: ClipboardList,
    listings: Package,
    rating: Star,
};

interface DashboardStatsProps {
    stats: DashboardStat[];
}

export function DashboardStats({ stats }: DashboardStatsProps) {
    return (
        <section className="px-4 pt-5 sm:px-6" aria-label="Tổng quan cửa hàng">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Tổng quan</h2>
            <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {stats.map(({ id, label, value, hint }) => {
                    const Icon = icons[id];
                    return (
                        <div key={id} className="rounded-lg border border-slate-200 bg-white p-3.5">
                            <dt className="flex items-center gap-1.5 text-xs text-slate-500">
                                <Icon className="size-4 text-emerald-600" aria-hidden="true" />
                                {label}
                            </dt>
                            <dd className="mt-1.5 text-xl font-semibold text-slate-900">{value}</dd>
                            <p className="mt-0.5 text-xs text-slate-500">{hint}</p>
                        </div>
                    );
                })}
            </dl>
        </section>
    );
}