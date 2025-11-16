import type { Product } from "../types/product";

export async function fetchProductBySlug(slug: string): Promise<Product> {
    const res = await fetch(
        `https://api.easy-orders.net/api/v1/products/slug/clear-theme/${slug}?join=reviews`
    );
    if (!res.ok) throw new Error("Failed to fetch product");
    const json = await res.json();
    return json?.data ?? json;
}
