import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { MerchantProducts } from "@/components/merchant/merchant-products";
import { MerchantProfileHeader } from "@/components/merchant/merchant-profile-header";
import { getMerchantState } from "@/lib/merchant-api";
import {
    mockCategories,
    mockDashboardStats,
    mockProducts,
    mockRecentOrders,
} from "@/lib/mock-data";

export default async function MerchantDashboardPage() {
    const state = await getMerchantState();
    // Layout đã xử lý pending / onboard / lỗi; ở đây chỉ còn trạng thái active.
    if (state.status !== "active") return null;

    return (
        <>
            <MerchantProfileHeader merchant={state.merchant} />
            <DashboardStats stats={mockDashboardStats} />
            <RecentOrders orders={mockRecentOrders} />
            <MerchantProducts categories={mockCategories} products={mockProducts} />
        </>
    );
}