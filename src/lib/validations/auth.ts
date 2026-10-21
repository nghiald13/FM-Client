import { z } from "zod";
import type { LoginFormValues, RegisterFormValues } from "@/types";

export const loginSchema = z.object({
    email: z.string().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
    password: z
        .string()
        .min(1, "Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu tối thiểu 6 ký tự"),
    rememberMe: z.boolean(),
}) satisfies z.ZodType<LoginFormValues>;

const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;

export const registerSchema = z
    .object({
        fullName: z
            .string()
            .trim()
            .min(1, "Vui lòng nhập họ tên")
            .min(2, "Họ tên tối thiểu 2 ký tự")
            .max(50, "Họ tên tối đa 50 ký tự"),
        email: z.string().min(1, "Vui lòng nhập email").email("Email không hợp lệ"),
        password: z
            .string()
            .min(1, "Vui lòng nhập mật khẩu")
            .min(8, "Mật khẩu tối thiểu 8 ký tự")
            .regex(/[A-Za-z]/, "Mật khẩu cần có ít nhất 1 chữ cái")
            .regex(/\d/, "Mật khẩu cần có ít nhất 1 chữ số"),
        confirmPassword: z.string().min(1, "Vui lòng nhập lại mật khẩu"),
        phone: z
            .string()
            .min(1, "Vui lòng nhập số điện thoại")
            .regex(phoneRegex, "Số điện thoại không hợp lệ"),
        city: z.string().min(1, "Vui lòng chọn tỉnh/thành"),
        intent: z.enum(["buy", "sell", "both"]),
        acceptTerms: z.boolean().refine((value) => value, "Bạn cần đồng ý với điều khoản để tiếp tục"),
    })
    .refine((values) => values.password === values.confirmPassword, {
        message: "Mật khẩu xác nhận không khớp",
        path: ["confirmPassword"],
    }) satisfies z.ZodType<RegisterFormValues>;

export const registerStepFields: (keyof RegisterFormValues)[][] = [
    ["fullName", "email", "password", "confirmPassword"],
    ["phone", "city", "intent"],
    ["acceptTerms"],
];

export function getPasswordStrength(password: string): { score: number; label: string } {
    if (!password) return { score: 0, label: "" };

    const checks: boolean[] = [
        password.length >= 8,
        /[a-z]/.test(password) && /[A-Z]/.test(password),
        /\d/.test(password),
        /[^A-Za-z0-9]/.test(password),
    ];
    const score = checks.filter(Boolean).length;
    const labels = ["Rất yếu", "Yếu", "Trung bình", "Khá mạnh", "Mạnh"];

    return { score, label: labels[score] };
}