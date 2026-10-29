export type ProductCondition = "new" | "like-new" | "well-used";

export interface ProductVariant {
    id: string;
    name: string;
    sku: string;
    price: number;
    stock: number;
    colorHex?: string;
    isDefault: boolean;
}

export interface ProductCategory {
    id: string;
    name: string;
}

export interface Product {
    id: string;
    title: string;
    categoryId: string;
    image: string;
    condition: ProductCondition;
    location: string;
    sold: number;
    /** Luôn có ít nhất 1 variant (kiểu tuple non-empty). */
    variants: [ProductVariant, ...ProductVariant[]];
}

export interface Merchant {
    id: string;
    name: string;
    handle: string;
    avatar: string;
    banner: string;
    bio: string;
    location: string;
    rating: number;
    reviewCount: number;
    totalSales: number;
    responseTime: string;
    joinedAt: string;
    verified: boolean;
}