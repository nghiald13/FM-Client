export type DashboardStatId = "revenue" | "orders" | "listings" | "rating";

export interface DashboardStat {
    id: DashboardStatId;
    label: string;
    value: string;
    hint: string;
}

export type OrderStatus = "pending" | "shipped" | "completed";

export interface RecentOrder {
    id: string;
    code: string;
    buyerName: string;
    productTitle: string;
    total: number;
    status: OrderStatus;
    createdLabel: string;
}