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

export interface AuthUser {
    id: string;
    name: string;
    email: string;
    avatar: string;
}

export interface MockAccount extends AuthUser {
    password: string;
}

export interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
}

export type LoginResult =
    | { ok: true; user: AuthUser }
    | { ok: false; message: string };

export type RegisterIntent = "buy" | "sell" | "both";

export interface RegisterFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    city: string;
    intent: RegisterIntent;
    acceptTerms: boolean;
}

export type RegisterResult =
    | { ok: true; account: MockAccount }
    | { ok: false; message: string };

export interface RegisterStepConfig {
    id: string;
    label: string;
    description: string;
}

export interface IntentOption {
    value: RegisterIntent;
    label: string;
    description: string;
    icon: LucideIcon;
}

export interface PasswordStrength {
    score: number;
    label: string;
}