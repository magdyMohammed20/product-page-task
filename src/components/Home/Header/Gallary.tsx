import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

interface Props {
    images: string[];
    resetSignal?: string;
}
function Gallary({ images, resetSignal }: Props) {

    const [selected, setSelected] = useState(0);

    // Embla for main images
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "start",
        containScroll: "trimSnaps",
    });

    // Embla for thumbnails
    const [thumbRef, thumbApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
    });

    const scrollTo = (i: number) => {
        emblaApi?.scrollTo(i);
    };

    // Sync main slider → selected index
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        const index = emblaApi.selectedScrollSnap();
        setSelected(index);
        thumbApi?.scrollTo(index);
    }, [emblaApi, thumbApi]);

    // ZOOM state
    const [zoom, setZoom] = useState(false);
    const [position, setPosition] = useState({ x: 50, y: 50 });

    const handleZoomMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y });
    };

    useEffect(() => {
        if (!emblaApi) return;
        setTimeout(() => {
            emblaApi.scrollTo(0);
            thumbApi?.scrollTo(0);
            setSelected(0);
        }, 0);
    }, [resetSignal, emblaApi, thumbApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <>
            <div className="images">
                {/* Embla Main Carousel */}
                <div className='flex gap-2 md:gap-5 h-[371px] md:h-[400px] lg:h-[610px] mb-5'>
                    {/* Embla Main */}
                    <div className="embla flex-1">
                        <div className="embla__viewport h-full overflow-hidden" ref={emblaRef}>
                            <div className="embla__container flex h-full">
                                {images.map((img, i) => (
                                    <div key={i} className="embla__slide flex-[0_0_100%] h-full">
                                        <div
                                            className="h-full rounded-lg overflow-hidden cursor-zoom-in"
                                            onMouseEnter={() => setZoom(true)}
                                            onMouseLeave={() => setZoom(false)}
                                            onMouseMove={handleZoomMove}
                                            onClick={() => setZoom(prev => !prev)}
                                        >
                                            {img && (
                                                <img
                                                    src={img}
                                                    alt={i.toString()}
                                                    className={`w-full h-full object-fill transition-transform duration-300 ${zoom ? "scale-150" : "scale-100"
                                                        }`}
                                                    style={{
                                                        transformOrigin: `${position.x}% ${position.y}%`,
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className=' h-full flex flex-col justify-between items-center '>
                        {/* Buttons (Share & Wishlist) */}
                        <div className="flex flex-col gap-3">
                            <button className="bg-gray-btn w-11 h-11 md:w-14 md:h-14 rounded-xl shadow flex items-center justify-center">
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3017 1.57883C13.0669 0.208059 11.1165 0.760459 9.94484 1.64038C9.46434 2.00117 9.22418 2.18156 9.08284 2.18156C8.94151 2.18156 8.70134 2.00117 8.22084 1.64038C7.04919 0.760459 5.09875 0.208059 2.86404 1.57883C-0.0687643 3.37782 -0.732388 9.31278 6.03245 14.3199C7.32094 15.2735 7.96518 15.7504 9.08284 15.7504C10.2005 15.7504 10.8448 15.2735 12.1333 14.3199C18.8981 9.31278 18.2344 3.37782 15.3017 1.57883Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                            <button className="bg-gray-btn w-11 h-11 md:w-14 md:h-14 rounded-xl shadow flex items-center justify-center">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 5.83337C15.6454 5.96719 16.1323 6.19053 16.5237 6.56328C17.5 7.49322 17.5 8.98996 17.5 11.9834C17.5 14.9768 17.5 16.4735 16.5237 17.4035C15.5474 18.3334 13.976 18.3334 10.8333 18.3334H9.16667C6.02397 18.3334 4.45262 18.3334 3.47631 17.4035C2.5 16.4735 2.5 14.9768 2.5 11.9834C2.5 8.98996 2.5 7.49322 3.47631 6.56328C3.86765 6.19053 4.35458 5.96719 5 5.83337" stroke="#141414" strokeWidth="1.25" strokeLinecap="round" />
                                    <path d="M10.0211 1.66706L10 11.6666M10.0211 1.66706C9.88558 1.66145 9.74925 1.70989 9.62775 1.8124C8.87242 2.45001 7.5 4.10735 7.5 4.10735M10.0211 1.66706C10.1426 1.6721 10.2635 1.7206 10.3723 1.81253C11.1276 2.45027 12.5 4.10735 12.5 4.10735" stroke="#141414" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>

                        {/* ARROWS */}

                        <div className="flex flex-col items-center gap-3">
                            <button
                                onClick={() => scrollTo(Math.max(selected - 1, 0))}
                                disabled={selected === 0}
                                className={`py-3 px-4 bg-gray-btn shadow-md rounded-xl pointer-events-auto transition `}
                            >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                                    <path d="M5.75 0.75C5.75 0.75 0.750009 4.43242 0.75 5.75C0.749992 7.06767 5.75 10.75 5.75 10.75"
                                        stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            <button
                                onClick={() => scrollTo(Math.min(selected + 1, images.length - 1))}
                                disabled={selected === images.length - 1}
                                className={`py-3 px-4 bg-gray-btn shadow-md rounded-xl pointer-events-auto transition`}
                            >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                                    <path d="M0.75 0.75C0.75 0.75 5.74999 4.43242 5.75 5.75C5.75001 7.06767 0.75 10.75 0.75 10.75"
                                        stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" lg:max-w-[400px] overflow-x-auto" ref={thumbRef}>
                    <div className="flex flex-nowrap gap-3">
                        {images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    scrollTo(i);
                                    setSelected(i);
                                }}
                                className={`border rounded-md overflow-hidden shrink-0 ${selected === i ? "border-[#141414]" : "border-transparent"
                                    }`}
                            >
                                {img && (
                                    <img
                                        src={img}
                                        alt={i.toString()}
                                        className="h-[73px] w-14 lg:h-24 lg:w-24 object-cover"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallary
