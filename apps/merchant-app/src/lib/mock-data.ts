import type { Merchant, Product, ProductCategory } from "@/types/merchant";
import type { DashboardStat, RecentOrder } from "@/types/dashboard";
const img = (id: string): string =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

export const mockMerchant: Merchant = {
    id: "m-001",
    name: "Minh Anh Store",
    handle: "@minhanh.store",
    avatar: img("photo-1494790108377-be9c29b29330"),
    banner: img("photo-1441986300917-64674bd600d8"),
    bio: "Chuyên đồ công nghệ và phụ kiện second-hand tuyển chọn. Hàng chính hãng, mô tả trung thực, đóng gói cẩn thận.",
    location: "Quận 3, TP. Hồ Chí Minh",
    rating: 4.9,
    reviewCount: 312,
    totalSales: 1284,
    responseTime: "Phản hồi trong 10 phút",
    joinedAt: "03/2023",
    verified: true,
};

export const mockCategories: ProductCategory[] = [
    { id: "electronics", name: "Điện tử" },
    { id: "fashion", name: "Thời trang" },
    { id: "accessories", name: "Phụ kiện" },
];

export const mockProducts: Product[] = [
    {
        id: "p-001",
        title: "Tai nghe over-ear chống ồn",
        categoryId: "electronics",
        image: img("photo-1505740420928-5e560c06d30e"),
        condition: "like-new",
        location: "Quận 3, TP.HCM",
        sold: 42,
        variants: [
            { id: "p-001-v1", name: "Đen", sku: "HP-BLK", price: 1850000, stock: 5, colorHex: "#111827", isDefault: true },
            { id: "p-001-v2", name: "Bạc", sku: "HP-SLV", price: 1900000, stock: 2, colorHex: "#cbd5e1", isDefault: false },
        ],
    },
    {
        id: "p-002",
        title: "Máy ảnh film compact",
        categoryId: "electronics",
        image: img("photo-1526170375885-4d8ecf77b99f"),
        condition: "well-used",
        location: "Quận 3, TP.HCM",
        sold: 9,
        variants: [
            { id: "p-002-v1", name: "Mặc định", sku: "CAM-STD", price: 2400000, stock: 1, isDefault: true },
        ],
    },
    {
        id: "p-003",
        title: "Giày sneaker chạy bộ",
        categoryId: "fashion",
        image: img("photo-1542291026-7eec264c27ff"),
        condition: "new",
        location: "Quận 1, TP.HCM",
        sold: 77,
        variants: [
            { id: "p-003-v1", name: "Đỏ / 40", sku: "SN-RED-40", price: 1250000, stock: 3, colorHex: "#dc2626", isDefault: true },
            { id: "p-003-v2", name: "Đỏ / 41", sku: "SN-RED-41", price: 1250000, stock: 0, colorHex: "#dc2626", isDefault: false },
            { id: "p-003-v3", name: "Đỏ / 42", sku: "SN-RED-42", price: 1290000, stock: 4, colorHex: "#dc2626", isDefault: false },
        ],
    },
    {
        id: "p-004",
        title: "Giày thể thao đế êm",
        categoryId: "fashion",
        image: img("photo-1491553895911-0055eca6402d"),
        condition: "like-new",
        location: "Quận 3, TP.HCM",
        sold: 23,
        variants: [
            { id: "p-004-v1", name: "Xám / 41", sku: "SP-GRY-41", price: 780000, stock: 2, colorHex: "#94a3b8", isDefault: true },
            { id: "p-004-v2", name: "Xám / 43", sku: "SP-GRY-43", price: 780000, stock: 1, colorHex: "#94a3b8", isDefault: false },
        ],
    },
    {
        id: "p-005",
        title: "Đồng hồ đeo tay dây da",
        categoryId: "accessories",
        image: img("photo-1523275335684-37898b6baf30"),
        condition: "new",
        location: "Quận 3, TP.HCM",
        sold: 31,
        variants: [
            { id: "p-005-v1", name: "Dây nâu", sku: "WT-BRN", price: 990000, stock: 6, colorHex: "#78350f", isDefault: true },
            { id: "p-005-v2", name: "Dây đen", sku: "WT-BLK", price: 990000, stock: 8, colorHex: "#111827", isDefault: false },
        ],
    },
    {
        id: "p-006",
        title: "Kính mát gọng nhựa",
        categoryId: "accessories",
        image: img("photo-1572635196237-14b3f281503f"),
        condition: "well-used",
        location: "Quận 3, TP.HCM",
        sold: 15,
        variants: [
            { id: "p-006-v1", name: "Mặc định", sku: "SG-STD", price: 320000, stock: 4, isDefault: true },
        ],
    },
];

export const mockDashboardStats: DashboardStat[] = [
    { id: "revenue", label: "Doanh thu 30 ngày", value: "42.350.000 ₫", hint: "Tăng 12% so với kỳ trước" },
    { id: "orders", label: "Đơn cần xử lý", value: "7", hint: "3 đơn chờ đóng gói" },
    { id: "listings", label: "Sản phẩm đang bán", value: "6", hint: "1 phân loại đã hết hàng" },
    { id: "rating", label: "Đánh giá trung bình", value: "4,9", hint: "312 đánh giá" },
];

export const mockRecentOrders: RecentOrder[] = [
    { id: "o-1", code: "FM2481", buyerName: "Trần Quốc Bảo", productTitle: "Tai nghe over-ear chống ồn", total: 1850000, status: "pending", createdLabel: "15 phút trước" },
    { id: "o-2", code: "FM2480", buyerName: "Lê Thu Hà", productTitle: "Giày sneaker chạy bộ (Đỏ / 42)", total: 1290000, status: "pending", createdLabel: "1 giờ trước" },
    { id: "o-3", code: "FM2476", buyerName: "Phạm Gia Huy", productTitle: "Đồng hồ đeo tay dây da (Dây nâu)", total: 990000, status: "shipped", createdLabel: "Hôm qua" },
    { id: "o-4", code: "FM2471", buyerName: "Đỗ Mai Anh", productTitle: "Kính mát gọng nhựa", total: 320000, status: "completed", createdLabel: "2 ngày trước" },
];