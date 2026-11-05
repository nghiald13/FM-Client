"use client";

import { useState } from "react";
import { MerchantStatusNotice } from "@/components/merchant/merchant-status-notice";
import { OnboardProgress } from "@/components/onboard/onboard-progress";
import { Stage1Form } from "@/components/onboard/stage1-form";
import { Stage2Form } from "@/components/onboard/stage2-form";
import { Stage3Form } from "@/components/onboard/stage3-form";
import { onboardSteps } from "@/lib/constants";

const LAST_STEP = onboardSteps.length - 1;

export function OnboardWizard() {
    const [step, setStep] = useState<number>(0);
    const [isPending, setIsPending] = useState<boolean>(false);

    // Xong stage 3 (hoặc BE báo hồ sơ đang thụ lý): dùng lại trang thông báo
    if (isPending) return <MerchantStatusNotice variant="pending" />;

    function handleNext(): void {
        if (step >= LAST_STEP) {
            setIsPending(true);
            return;
        }
        setStep((current) => current + 1);
    }

    const stageProps = { onSuccess: handleNext, onPending: () => setIsPending(true) };

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="mb-5 space-y-1">
                <h1 className="text-xl font-bold text-slate-900">Đăng ký bán hàng</h1>
                <p className="text-sm text-slate-500">{onboardSteps[step].description}</p>
            </div>

            <div className="mb-6">
                <OnboardProgress steps={onboardSteps} currentStep={step} />
            </div>

            {step === 0 && <Stage1Form {...stageProps} />}
            {step === 1 && <Stage2Form {...stageProps} />}
            {step === 2 && <Stage3Form {...stageProps} />}
        </div>
    );
}