import { useEffect, useState } from 'react';
import Gallary from './Gallary'
import ProductDetails from './ProductDetails'
import type { Product } from '../../../types/product';

function Header({ data }: { data: Product }) {
    const [mainImage, setMainImage] = useState<string>("");

    const images = [mainImage!, ...(data.images ?? []).filter(img => img !== mainImage)];

    useEffect(() => {
        if (!data) return;
        const first = [data.thumb, ...(data.images ?? [])].filter(Boolean)[0];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMainImage(first ?? "");
    }, [data]);

    return (
        <div className="grid md:grid-cols-2 gap-4 md:gap-10 lg:gap-16 xl:gap-32 mt-5 mb-14 md:mb-20 border-b border-gray border-dashed pb-14 md:pb-20">
            <Gallary images={images} resetSignal={mainImage} />
            <ProductDetails data={data} setMainImage={setMainImage} />
        </div>
    )
}

export default Header
