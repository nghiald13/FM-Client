import { ClipboardList } from "lucide-react";
import { Badge } from "@freemarket/ui/badge";
import { cn, formatVnd } from "@freemarket/utils";
import type { OrderStatus, RecentOrder } from "@/types/dashboard";

const statusMap: Record<OrderStatus, { label: string; className: string }> = {
    pending: { label: "Chờ xử lý", className: "bg-amber-50 text-amber-700 border-amber-200" },
    shipped: { label: "Đang giao", className: "bg-sky-50 text-sky-700 border-sky-200" },
    completed: { label: "Hoàn tất", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
};

interface RecentOrdersProps {
    orders: RecentOrder[];
}

export function RecentOrders({ orders }: RecentOrdersProps) {
    return (
        <section className="px-4 pt-6 sm:px-6" aria-label="Đơn hàng gần đây">
            <h2 className="mb-3 text-lg font-semibold text-slate-900">Đơn hàng gần đây</h2>

            {orders.length === 0 ? (
                <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed border-slate-300 bg-white px-4 py-10 text-center">
                    <ClipboardList className="size-8 text-slate-400" aria-hidden="true" />
                    <p className="text-sm text-slate-600">Chưa có đơn hàng nào.</p>
                </div>
            ) : (
                <ul className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white">
                    {orders.map((order) => {
                        const status = statusMap[order.status];
                        return (
                            <li key={order.id} className="flex items-center justify-between gap-3 px-3.5 py-3">
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-medium text-slate-900">{order.productTitle}</p>
                                    <p className="truncate text-xs text-slate-500">
                                        #{order.code} · {order.buyerName} · {order.createdLabel}
                                    </p>
                                </div>
                                <div className="flex shrink-0 flex-col items-end gap-1">
                                    <span className="text-sm font-semibold text-slate-900">{formatVnd(order.total)}</span>
                                    <Badge variant="outline" className={cn(status.className)}>
                                        {status.label}
                                    </Badge>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            )}
        </section>
    );
}