import type { ReactNode } from "react";
import { MerchantShell } from "@/components/merchant/merchant-shell";

export default function MerchantLayout({ children }: { children: ReactNode }) {
    return <MerchantShell>{children}</MerchantShell>;
}