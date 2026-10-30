import { LucideIcon } from "lucide-react";


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
    emailOrPhone: string;
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

export type ItemCondition = "New" | "Like New" | "Well Used";
export type ListingStatus = "active" | "paused";
export type OrderStatus = "pending" | "shipped" | "completed";

export interface ActionFailure {
    ok: false;
    message: string;
    /** "invalid_token": key đã hết hạn hoặc không hợp lệ */
    code?: "invalid_token";
}

export type ActionResult<T = void> = { ok: true; data: T } | ActionFailure;

export interface VerifyAccountUser {
    email: string;
    fullName?: string;
}