import { useState } from 'react'
import Star from '../../../icons/Star';
import LikeIcon from '../../../icons/LikeIcon';

function ReviewSection() {

    const [selectedTab, setSelectedTab] = useState("all");

    const reviews = [
        {
            id: 1,
            user_name: "Darrell Steward",
            user_image: "/product-1.png",
            date: "July 2, 2020 03:29 PM",
            rating: 5,
            review: "This is amazing product I have.",
            liked: true,
            replied: 128
        },
        {
            id: 2,
            user_name: "Darlene Robertson",
            user_image: "/product-1.png",
            date: "July 2, 2020 1:04 PM",
            rating: 5,
            review: "This is amazing product I have.",
            liked: false,
            replied: 82
        },
        {
            id: 3,
            user_name: "Kathryn Murphy",
            user_image: "/product-1.png",
            date: "July 2, 2020 03:29 PM",
            rating: 5,
            review: "This is amazing product I have.",
            liked: false,
            replied: 9
        },
        {
            id: 4,
            user_name: "Ronald Richards",
            user_image: "/product-1.png",
            date: "July 7, 2020 10:14 AM",
            rating: 5,
            review: "This is amazing product I have.",
            liked: false,
            replied: 124
        },
    ]

    return (
        <section className="lg:col-span-3 space-y-6">

            <span className="mb-4 md:text-xl font-semibold block">Review Lists</span>

            <div className="flex justify-between items-start">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2">
                    {[
                        { key: "all", label: "All Reviews" },
                        { key: "media", label: "With Photo & Video" },
                        { key: "desc", label: "With Description" },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            className={`rounded-lg border text-xs md:text-sm h-8 px-5 ${selectedTab === tab.key ? "bg-gray-btn text-[#141414] border-[#333333]" : "border-transparent"}`}
                            onClick={() => setSelectedTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {/* Show Sidebar */}
                <button className="lg:hidden h-8 w-10 flex items-center justify-center border border-gray rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.50016 1.75H15.5002C16.4168 1.75 17.1668 2.5 17.1668 3.41667V5.25C17.1668 5.91667 16.7502 6.75 16.3335 7.16667L12.7502 10.3333C12.2502 10.75 11.9168 11.5833 11.9168 12.25V15.8333C11.9168 16.3333 11.5835 17 11.1668 17.25L10.0002 18C8.91683 18.6667 7.41683 17.9167 7.41683 16.5833V12.1667C7.41683 11.5833 7.0835 10.8333 6.75016 10.4167L3.5835 7.08333C3.16683 6.66667 2.8335 5.91667 2.8335 5.41667V3.5C2.8335 2.5 3.5835 1.75 4.50016 1.75Z" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>


            {/* Review List */}
            <div className="space-y-8">
                {reviews.map((review) => (
                    <div key={review.id} className="py-6 border-b border-dashed border-gray">
                        <div className="space-y-3">
                            <Star rating={review.rating} />
                            <h3 className="font-semibold md:text-lg mb-1">{review.review}</h3>
                            <h4 className="text-xs md:text-base text-[#818B9C]">{review.date}</h4>
                            <div className='flex justify-between items-center'>
                                <a href="#" className="inline-flex items-center gap-3 mt-6">
                                    <img src={review.user_image} className="w-8 h-8 rounded-full" />
                                    <span className="text-sm md:text-base font-medium">{review.user_name}</span>
                                </a>
                                <div className="flex justify-end gap-3">
                                    <button className="flex items-center gap-1 font-normal text-[#0B0F0E] text-sm border border-gray px-3 py-1.5 rounded-lg">
                                        <LikeIcon active={review.liked} />
                                        {review.replied}
                                    </button>
                                    <button className=" border border-gray px-3 py-1.5 rounded-lg">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.47998 5.65003L10.58 3.25003C10.98 2.85003 11.88 2.65003 12.48 2.65003H16.28C17.48 2.65003 18.78 3.55003 19.08 4.75003L21.48 12.05C21.98 13.45 21.08 14.65 19.58 14.65H15.58C14.98 14.65 14.48 15.15 14.58 15.85L15.08 19.05C15.28 19.95 14.68 20.95 13.78 21.25C12.98 21.55 11.98 21.15 11.58 20.55L7.47998 14.45" stroke="#0B0F0E" strokeWidth="1.5" strokeMiterlimit="10" />
                                            <path d="M2.37988 5.6501V15.4501C2.37988 16.8501 2.97988 17.3501 4.37988 17.3501H5.37988C6.77988 17.3501 7.37988 16.8501 7.37988 15.4501V5.6501C7.37988 4.2501 6.77988 3.7501 5.37988 3.7501H4.37988C2.97988 3.7501 2.37988 4.2501 2.37988 5.6501Z" stroke="#0B0F0E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3">
                {[1, 2, 3, 4].map((p) => (
                    <button
                        key={p}
                        className={`px-5 py-3 border rounded-lg ${p === 1 ? "border-[#333333]" : "border-gray/50"}`}
                    >
                        {p}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default ReviewSection
