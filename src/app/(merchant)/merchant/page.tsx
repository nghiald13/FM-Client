import { MerchantProfileHeader } from "@/components/merchant/merchant-profile-header";
import { MerchantProducts } from "@/components/merchant/merchant-products";
import { mockCategories, mockMerchant, mockProducts } from "@/lib/mock-data";

export default function MyMerchantPage() {
    return (
        <>
            <MerchantProfileHeader merchant={mockMerchant} />
            <MerchantProducts categories={mockCategories} products={mockProducts} />
        </>
    );
}