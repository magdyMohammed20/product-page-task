import Sidebar from "./Sidebar";

import ReviewSection from "./ReviewSection";
import RatingHeader from "./RatingHeader";

export default function ReviewsPage() {

    return (
        <div className="border-b border-dashed border-gray pb-14 md:pb-20 mb-14 md:mb-[74px] ">
            <h2 className="mt-20 text-2xl md:text-3xl font-semibold">Product Reviews</h2>
            {/* Rating Header */}
            <RatingHeader />

            <div className="w-full  mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 py-10">
                {/* Sidebar Filters */}
                <Sidebar />

                {/* Main Reviews Section */}
                <ReviewSection />
            </div>
        </div>
    );
}
