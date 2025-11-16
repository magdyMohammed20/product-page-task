import { useQuery } from "@tanstack/react-query";
import { fetchProductBySlug } from "../api/productService";

export function useFetchProduct(slug: string) {
    return useQuery({
        queryKey: ["product", slug],
        queryFn: () => fetchProductBySlug(slug),
        staleTime: 1000 * 60 * 5,
        retry: 1,
    });
}
