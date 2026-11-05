import { cache } from "react";
import { z } from "zod";
import { backendRequest, getBackendFailureMessage } from "@/lib/backend";
import type { ActionResult, MerchantState, OnboardStage } from "@/types/onboard";

const merchantProfileSchema = z.object({
    shopName: z.string().min(1),
    description: z.string().nullish(),
    logoUrl: z.string().nullish(),
    bannerUrl: z.string().nullish(),
    contactEmail: z.string().nullish(),
    contactPhone: z.string().nullish(),
});

/**
 * GET /merchant. Bọc bằng cache() để layout và page trong cùng một request
 * chỉ gọi backend một lần.
 */
export const getMerchantState = cache(async (): Promise<MerchantState> => {
    const result = await backendRequest("", { method: "GET" });

    if (result.ok) {
        const parsed = merchantProfileSchema.safeParse(result.data);
        if (!parsed.success) {
            return {
                status: "error",
                message: getBackendFailureMessage({ ok: false, kind: "invalid_response" }, ""),
            };
        }
        return { status: "active", merchant: parsed.data };
    }

    if (result.kind === "backend") {
        if (result.errorName === "OnboardPendingException") return { status: "pending" };
        if (result.errorName === "InvalidMerchantException") return { status: "not_onboarded" };
    }

    return {
        status: "error",
        message: getBackendFailureMessage(result, "Không thể tải thông tin cửa hàng"),
    };
});

export async function postOnboardStage(stage: OnboardStage, payload: unknown): Promise<ActionResult> {
    const result = await backendRequest(`/merchant/onboard/${stage}`, { method: "POST", body: payload });
    if (result.ok) return { ok: true };

    if (result.kind === "unauthorized") {
        return { ok: false, code: "unauthorized", message: getBackendFailureMessage(result, "") };
    }
    if (result.kind === "backend" && result.errorName === "OnboardPendingException") {
        return { ok: false, code: "pending", message: "Hồ sơ của bạn đang được thụ lý" };
    }
    return {
        ok: false,
        message: getBackendFailureMessage(result, "Không thể lưu thông tin. Vui lòng kiểm tra lại và thử lại"),
    };
}