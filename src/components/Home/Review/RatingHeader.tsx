import Star from '../../../icons/Star'
import Circle from "../../../icons/Circle";

function RatingHeader() {
    const rating = 5

    return (
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 items-start gap-8 mt-6 border border-dashed border-gray p-4 md:p-6 rounded-lg">
            <div className="flex gap-5 items-center">
                <div className="relative w-24 h-24">
                    <Circle rating={rating} />
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
                        {rating}
                    </div>
                </div>
                <div>
                    <Star rating={rating} />
                    <span className="text-sm text-[#525252] mt-3 block">from 125k reviews</span>
                </div>
            </div>
            <div className="lg:col-span-2 xl:col-span-3">
                {[5, 4, 3, 2, 1].map((rate, i) => (
                    <div
                        key={rate}
                        className="grid grid-cols-[60px_1fr_60px] items-center gap-3 my-3 text-xs md:text-base"
                    >
                        {/* rating */}
                        <span className="flex items-center gap-1">
                            {rate.toFixed(1)}
                            <Star />
                        </span>

                        {/* progress bar */}
                        <div className="h-2 bg-[#E4E9EE] rounded-full w-full">
                            <div
                                className="h-full bg-[#292929] rounded-full"
                                style={{ width: `${[90, 70, 20, 5, 1][i]}%` }}
                            ></div>
                        </div>

                        {/* reviews count */}
                        <span className="text-[#0B0F0E] text-start block w-full">
                            {[2823, 38, 4, 0, 0][i]}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RatingHeader
