import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CenteredPage } from "@/components/merchant/centered-page";
import { MerchantStatusNotice } from "@/components/merchant/merchant-status-notice";

import { getMerchantState } from "@/lib/merchant-api";
import { OnboardWizard } from "@/components/onboard/onboard-wizrd";

export const metadata: Metadata = {
    title: "Đăng ký bán hàng",
    robots: { index: false },
};

export default async function OnboardPage() {
    const state = await getMerchantState();

    if (state.status === "active") redirect("/");

    if (state.status === "pending") {
        return (
            <CenteredPage>
                <MerchantStatusNotice variant="pending" />
            </CenteredPage>
        );
    }

    if (state.status === "error") {
        return (
            <CenteredPage>
                <MerchantStatusNotice variant="error" message={state.message} />
            </CenteredPage>
        );
    }

    return (
        <CenteredPage wide>
            <OnboardWizard />
        </CenteredPage>
    );
}