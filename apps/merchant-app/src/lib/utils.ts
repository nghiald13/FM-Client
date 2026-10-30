import type { Product, ProductVariant } from "@/types/merchant";

export function getDefaultVariant(product: Product): ProductVariant {
    return product.variants.find((v) => v.isDefault) ?? product.variants[0];
}