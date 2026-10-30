import type { LucideIcon } from "lucide-react";

export type AppMode = "buyer" | "merchant";

export interface NavItem {
    label: string;
    href: string;
    icon: LucideIcon;
    exact?: boolean;
    highlight?: boolean;
}

export interface CartItem {
    productId: string;
    title: string;
    price: number;
    image: string;
    sellerName: string;
    color?: string;
    quantity: number;
}

export type ProductCondition = "new" | "like-new" | "well-used";

export type SortOption = "newest" | "price-asc" | "price-desc";

export interface Category {
    id: string;
    label: string;
    icon: LucideIcon;
}

export interface Seller {
    id: string;
    name: string;
    rating: number;
    totalSales: number;
    responseTime: string;
    verified: boolean;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    images: string[];
    category: string;
    condition: ProductCondition;
    location: string;
    stock: number;
    tags: string[];
    colors: string[];
    postedLabel: string;
    createdAt: string;
    seller: Seller;
}

export interface ProductQuery {
    category?: string;
    sort?: SortOption;
}