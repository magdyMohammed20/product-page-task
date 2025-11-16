import { useMemo, useState } from "react";
import Variations from "./Variation";
import type { Product } from "../../../types/product";
import { trimHtml } from "../../../utils/trimHtml";
import { useProductStore } from "../../../hooks/useProductStore";

interface Props {
    data: Product;
    setMainImage: (img: string) => void
}

function ProductDetails({ data, setMainImage }: Props) {
    const [showMore, setShowMore] = useState(false);

    const LIMIT = 205;

    // trim html
    const trimmedHtml = useMemo(() => {
        return trimHtml(data.description ?? "", LIMIT);
    }, [data.description]);

    const {
        selectedVariant
    } = useProductStore();

    return (
        <div >
            <span className="text-gray text-xs md:text-base">{data.slug}</span>
            <h1 className="text-2xl lg:text-4xl font-semibold mt-3 mb-5 ">{data.name}</h1>
            <div className="flex justify-between items-center ">
                <div className="flex items-center gap-5">
                    <del className="text-sm md:text-base font-medium text-[#666666] ">£{selectedVariant?.price ?? data.price}</del>
                    <span className="font-semibold text-xl md:text-3xl">£{data.sale_price}</span>
                </div>
                <div className="flex items-center gap-5">
                    <span className="md:text-xl text-[#666666] ">{data.fake_visitors_min} Sold</span>
                    <span className="font-semibold text-xl md:text-2xl flex items-center gap-2">
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.38586 0.690968C8.68521 -0.230343 9.98862 -0.230344 10.288 0.690967L11.8066 5.36473C11.9404 5.77675 12.3244 6.05571 12.7576 6.05571H17.6719C18.6406 6.05571 19.0434 7.29533 18.2597 7.86473L14.284 10.7533C13.9335 11.0079 13.7868 11.4593 13.9207 11.8713L15.4393 16.5451C15.7386 17.4664 14.6842 18.2325 13.9004 17.6631L9.9247 14.7746C9.57421 14.5199 9.09962 14.5199 8.74913 14.7746L4.77339 17.6631C3.98968 18.2325 2.9352 17.4664 3.23455 16.5451L4.75314 11.8713C4.88702 11.4593 4.74036 11.0079 4.38987 10.7533L0.414135 7.86473C-0.369579 7.29533 0.0331967 6.05571 1.00192 6.05571H5.9162C6.34943 6.05571 6.73339 5.77675 6.86726 5.36473L8.38586 0.690968Z" fill="#FFA439" />
                        </svg>
                        4.5
                    </span>
                </div>
            </div>
            <div className="mt-5 border-gray border-t pt-5 border-dashed">
                <h2 className="text-lg md:text-xl mb-2.5">Description</h2>
                <div className="text-[#666] text-sm md:text-base pb-3">
                    <div dangerouslySetInnerHTML={{
                        __html: showMore ? (data?.description ?? "") : (trimmedHtml ?? "")
                    }} />
                    {trimmedHtml.length < (data.description?.length ?? 0) && (
                        <button
                            className="mt-2 font-medium text-black inline-block"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "See less" : "See more..."}
                        </button>
                    )}
                </div>
            </div>
            <Variations data={data} onColorChange={(img: string) => setMainImage(img)} />
            <div className="flex flex-wrap gap-3 mt-7">
                <button className="bg-black capitalize text-lg md:text-xl text-white rounded-lg h-[58px] px-26">add to cart</button>
                <button className=" border-[#141414] text-lg md:text-xl capitalize rounded-lg border  h-[58px] px-9 md:px-8">{data.buy_now_text}</button>
            </div>

            <a className="underline hidden md:flex capitalize text-[#525252]  items-center ms-auto mt-10"
                href="/">
                Delivery T&C
            </a>
        </div>
    )
}

export default ProductDetails
