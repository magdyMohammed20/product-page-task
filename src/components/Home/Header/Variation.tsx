import type { Product, Variation } from "../../../types/product";
import { useProductStore } from "../../../hooks/useProductStore";

interface Props {
    data: Product;
    onColorChange?: (img: string) => void;
}

export default function Variations({ data, onColorChange }: Props) {
    const { variations, variants } = data
    const {
        selectedVariations,
        setSelectedVariation,
    } = useProductStore();

    return (
        <div className="space-y-6 mt-6">

            {variations?.map((variation: Variation) => (
                <div key={variation.id}>
                    <h4 className="font-semibold mb-4 capitalize text-gray text-lg md:text-xl">
                        {variation.name}:{" "}
                        <span className="text-black">
                            {selectedVariations[variation.name] ?? ""}
                        </span>
                    </h4>
                    <div className="flex gap-3 flex-wrap">
                        {variation.props.map((p) => {
                            const isSelected = selectedVariations[variation.name] === p.name;

                            if (variation.type === "image") {
                                return (
                                    <button
                                        key={p.id}
                                        onClick={() => {
                                            setSelectedVariation(variation.name, p.name, variants);
                                            onColorChange?.(p.value as string);
                                        }}
                                        className={`rounded-md border h-10 p-1 w-[75px] overflow-hidden transition 
                        ${isSelected
                                                ? "border-[#141414]"
                                                : "border-gray-200"
                                            }`}
                                    >
                                        <img
                                            src={p.value}
                                            className="w-[63px] h-7 object-cover block"
                                        />
                                    </button>
                                );
                            }

                            return (
                                <button
                                    key={p.id}
                                    onClick={() =>
                                        setSelectedVariation(variation.name, p.name, variants)
                                    }
                                    className={`h-10 w-[74px] rounded-md border transition 
                    ${isSelected
                                            ? "border-[#141414] bg-gray-btn"
                                            : "border-gray-200"
                                        }`}
                                >
                                    {p.name}
                                </button>
                            );
                        })}

                        {/* Show link once only when not image */}
                        {variation.type !== "image" && (
                            <a
                                className="underline capitalize text-[#525252] flex items-center ms-auto"
                                href="/"
                            >
                                view size chart
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
