export interface VariationProp {
    id: string;
    name: string;
    value?: string;
}

export interface Variation {
    id: string;
    name: string;
    product_id?: string;
    type: string;
    props: VariationProp[];
}

export interface ProductVariant {
    id: string;
    price: number;
    sale_price?: number;
    stock?: number;
    options: Record<string, string>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    sale_price?: number;
    thumb?: string;
    images?: string[];
    description?: string;
    variations?: Variation[];
    quantity?: number;
    track_stock?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}
