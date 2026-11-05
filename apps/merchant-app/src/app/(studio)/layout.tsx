import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { MerchantShell } from "@/components/merchant/merchant-shell";
import { MerchantStatusNotice } from "@/components/merchant/merchant-status-notice";
import { CenteredPage } from "@/components/merchant/centered-page";
import { getMerchantState } from "@/lib/merchant-api";

export default async function StudioLayout({ children }: { children: ReactNode }) {
    const state = await getMerchantState();

    switch (state.status) {
        case "not_onboarded":
            redirect("/onboard");
        case "pending":
            return (
                <CenteredPage>
                    <MerchantStatusNotice variant="pending" />
                </CenteredPage>
            );
        case "error":
            return (
                <CenteredPage>
                    <MerchantStatusNotice variant="error" message={state.message} />
                </CenteredPage>
            );
        case "active":
            return <MerchantShell>{children}</MerchantShell>;
    }
}