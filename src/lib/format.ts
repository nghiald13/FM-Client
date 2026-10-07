const priceFormatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
});

export function formatPrice(value: number): string {
    return priceFormatter.format(value);
}

export function formatCompactNumber(value: number): string {
    return new Intl.NumberFormat("vi-VN", { notation: "compact" }).format(value);
}