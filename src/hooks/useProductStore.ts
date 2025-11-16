import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { produce } from "immer";
import type { ProductVariant } from "../types/product";

interface ProductStore {
    selectedVariations: Record<string, string>;
    selectedVariant: ProductVariant | null;

    // Actions
    setSelectedVariation: (
        variationType: string,
        value: string,
        variants: ProductVariant[]
    ) => void;

    clearSelectedVariations: () => void;
}

export const useProductStore = create<ProductStore>()(
    devtools((set) => ({
        selectedVariations: {},
        selectedVariant: null,

        setSelectedVariation: (variationType: string, value: string, variants: ProductVariant[]) => {
            set(produce(draft => {
                draft.selectedVariations[variationType] = value;
                // update selectedVariant by matching variants array if exists
                const found = variants.find((variant) => {
                    return variant.variation_props.every((vp: ProductVariant) => {
                        return draft.selectedVariations[vp.variation] === vp.variation_prop;
                    });
                });

                draft.selectedVariant = found ?? null;
            }));
        },

        clearSelectedVariations: () => {
            set(produce(draft => {
                draft.selectedVariations = {};
                draft.selectedVariant = null;
            }));
        },
    }))
);
