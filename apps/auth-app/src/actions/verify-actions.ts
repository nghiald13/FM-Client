"use server";

import { z } from "zod";
import { requestVerifyEmail, requestVerifyProcess } from "@/lib/verify-api";
import type { ActionResult } from "@/types";

const emailSchema = z.string().trim().min(1).max(254);
const keySchema = z.string().min(1).max(512);

export async function requestVerifyProcessAction(
    email: string,
): Promise<ActionResult<{ key: string }>> {
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) return { ok: false, message: "Email không hợp lệ" };
    return requestVerifyProcess(parsed.data);
}

export async function requestVerifyEmailAction(key: string): Promise<ActionResult> {
    const parsed = keySchema.safeParse(key);
    if (!parsed.success) return { ok: false, message: "Liên kết xác minh không hợp lệ" };
    return requestVerifyEmail(parsed.data);
}