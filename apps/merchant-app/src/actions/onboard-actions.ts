"use server";

import { postOnboardStage } from "@/lib/merchant-api";
import {
    merchantAddressDtoSchema,
    merchantKycSchema,
    merchantSchema,
} from "@/lib/validations/onboard";
import type {
    ActionResult,
    MerchantAddressDto,
    MerchantDto,
    MerchantKycDto,
} from "@/types/onboard";

const INVALID: ActionResult = { ok: false, message: "Dữ liệu không hợp lệ. Vui lòng kiểm tra lại" };

export async function submitStage1Action(values: MerchantDto): Promise<ActionResult> {
    const parsed = merchantSchema.safeParse(values);
    if (!parsed.success) return INVALID;
    return postOnboardStage("stage1", parsed.data);
}

export async function submitStage2Action(values: MerchantAddressDto): Promise<ActionResult> {
    const parsed = merchantAddressDtoSchema.safeParse(values);
    if (!parsed.success) return INVALID;
    return postOnboardStage("stage2", parsed.data);
}

export async function submitStage3Action(values: MerchantKycDto): Promise<ActionResult> {
    const parsed = merchantKycSchema.safeParse(values);
    if (!parsed.success) return INVALID;
    return postOnboardStage("stage3", parsed.data);
}