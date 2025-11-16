
interface Props {
    title: string;
    border?: boolean
}

function Products({ title, border = false }: Props) {

    const products = [
        {
            id: 1,
            name: "Whistle",
            price: "$26",
            short_description: "Long Sleeve Utility Shirt, Navy, 6",
            rate: "4.8",
            sold: "1.238",
            image: "../../../../public/logo.png"
        },
        {
            id: 2,
            name: "Whistle",
            price: "$26",
            short_description: "Long Sleeve Utility Shirt, Navy, 6",
            rate: "4.8",
            sold: "1.238",
            image: "../../../../public/product-1.png"
        },
        {
            id: 3,
            name: "Whistle",
            price: "$26",
            short_description: "Long Sleeve Utility Shirt, Navy, 6",
            rate: "4.8",
            sold: "1.238",
            image: "../../../../public/product-1.png"
        },
        {
            id: 4,
            name: "Whistle",
            price: "$26",
            short_description: "Long Sleeve Utility Shirt, Navy, 6",
            rate: "4.8",
            sold: "1.238",
            image: "../../../../public/product-1.png"
        },
        {
            id: 5,
            name: "Whistle",
            price: "$26",
            short_description: "Long Sleeve Utility Shirt, Navy, 6",
            rate: "4.8",
            sold: "1.238",
            image: "../../../../public/product-1.png"
        }
    ]

    return (
        <div className={`pb-14 md:pb-20 ${border && "border-b border-gray border-dashed"}`}>
            <div className='flex justify-between items-center mb-6'>
                <span className="font-semibold text-2xl lg:text-3xl">{title}</span>
                <a className="underline capitalize text-[#525252]" href="/">view all</a>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-9 mt-10'>
                {products.map((product) => (
                    <a className="group block" href="/" key={product.id}>
                        <div className="bg-gray-btn overflow-hidden h-[212px] md:h-[284px] w-full">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-full w-full object-contain transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3"
                            />
                        </div>
                        <h3 className="text-sm md:text-lg font-semibold mt-3 md:mt-4 ">{product.name}</h3>
                        <h4 className="font-semibold md:text-xl my-1 md:my-1.5">{product.price}</h4>
                        <p className="text-[#7A7A7A] text-sm md:text-base mb-1.5 md:mb-2">{product.short_description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-[#0B0F0E] flex items-center gap-2 font-normal">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.7289 1.4325L13.4889 4.9525C13.7289 5.4425 14.3689 5.9125 14.9089 6.0025L18.0989 6.5325C20.1389 6.8725 20.6189 8.3525 19.1489 9.8125L16.6689 12.2925C16.2489 12.7125 16.0189 13.5225 16.1489 14.1025L16.8589 17.1725C17.4189 19.6025 16.1289 20.5425 13.9789 19.2725L10.9889 17.5025C10.4489 17.1825 9.55893 17.1825 9.00893 17.5025L6.01893 19.2725C3.87893 20.5425 2.57893 19.5925 3.13893 17.1725L3.84893 14.1025C3.97893 13.5225 3.74893 12.7125 3.32893 12.2925L0.848932 9.8125C-0.611068 8.3525 -0.141067 6.8725 1.89893 6.5325L5.08893 6.0025C5.61893 5.9125 6.25893 5.4425 6.49893 4.9525L8.25893 1.4325C9.21893 -0.4775 10.7789 -0.4775 11.7289 1.4325Z" fill="#FFA439" />
                                </svg>
                                {product.rate}
                            </span>
                            <span className="text-[#666666] capitalize font-normal text-xs md:text-base">{product.sold} sold</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Products
