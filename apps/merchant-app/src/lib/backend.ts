import { z } from "zod";
import { auth } from "@/auth";

const API_BASE = process.env.MERCHANT_API_URL ?? "http://localhost:8084";

export type BackendFailureKind =
    | "unauthorized"
    | "network"
    | "rate_limit"
    | "server"
    | "invalid_response"
    | "backend";

export interface BackendFailure {
    ok: false;
    kind: BackendFailureKind;
    /** Giá trị field `error` của BE, ví dụ "OnboardPendingException" */
    errorName?: string;
    message?: string;
}

export type BackendResult = { ok: true; data: unknown } | BackendFailure;

const envelopeSchema = z.object({
    data: z.unknown().optional(),
    error: z.string().nullish(),
    message: z.string().nullish(),
    statusCode: z.number().nullish(),
    success: z.boolean().nullish(),
});

interface RequestOptions {
    method: "GET" | "POST";
    body?: unknown;
}

export async function backendRequest(
    path: string,
    { method, body }: RequestOptions,
): Promise<BackendResult> {
    const session = await auth();
    if (!session?.accessToken) return { ok: false, kind: "unauthorized" };

    let response: Response;
    try {
        response = await fetch(`${API_BASE}${path}`, {
            method,
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${session.accessToken}`,
            },
            body: body === undefined ? undefined : JSON.stringify(body),
            cache: "no-store",
        });
    } catch {
        return { ok: false, kind: "network" };
    }

    let json: unknown = null;
    try {
        json = await response.json();
    } catch {
        json = null;
    }
    const parsed = envelopeSchema.safeParse(json);
    const envelope = parsed.success ? parsed.data : null;

    if (response.status === 401) return { ok: false, kind: "unauthorized" };
    if (response.status === 429) return { ok: false, kind: "rate_limit" };

    if (!response.ok || envelope?.success === false) {
        if (envelope?.error) {
            return {
                ok: false,
                kind: "backend",
                errorName: envelope.error,
                message: envelope.message ?? undefined,
            };
        }
        return {
            ok: false,
            kind: response.status >= 500 ? "server" : "backend",
            message: envelope?.message ?? undefined,
        };
    }

    return { ok: true, data: envelope?.data ?? null };
}

export function getBackendFailureMessage(failure: BackendFailure, fallback: string): string {
    switch (failure.kind) {
        case "unauthorized":
            return "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại";
        case "network":
            return "Không thể kết nối tới máy chủ. Kiểm tra mạng và thử lại";
        case "rate_limit":
            return "Bạn thử quá nhiều lần. Vui lòng đợi một lúc rồi thử lại";
        case "server":
            return "Máy chủ đang gặp sự cố. Vui lòng thử lại sau";
        case "invalid_response":
            return "Máy chủ trả về dữ liệu không hợp lệ. Vui lòng thử lại sau";
        case "backend":
            return failure.message ?? fallback;
    }
}