import { useState } from "react";
import Star from "../../../icons/Star";

function Sidebar() {
    const [openRating, setOpenRating] = useState(true);
    const [openTopics, setOpenTopics] = useState(true);

    return (
        <aside className="hidden lg:block h-max lg:col-span-1 space-y-6 border border-dashed border-gray rounded-2xl">
            <div className="p-6 space-y-6">
                <span className="text-xl font-semibold border-b border-dashed border-gray block pb-4">
                    Reviews Filter
                </span>

                {/* Rating */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">Rating</h3>

                        <button
                            onClick={() => setOpenRating(!openRating)}
                            className={`transition-transform duration-300 ${
                                openRating ? "rotate-0" : "rotate-180"
                            }`}
                        >
                            <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.67 4.29883L5.41 1.03883C5.025 0.653827 4.395 0.653827 4.01 1.03883L0.75 4.29883"
                                    stroke="#0B0F0E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openRating ? "max-h-44" : "max-h-0"
                        }`}
                    >
                        <div className="space-y-3">
                            {[5, 4, 3, 2, 1].map((r) => (
                                <label
                                    key={r}
                                    className="flex items-center gap-2 text-[#818B9C]"
                                >
                                    <input type="checkbox" className="w-4 h-4" />
                                    <Star /> {r}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Review Topics */}
                <div>
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-semibold">Review Topics</h3>

                        <button
                            onClick={() => setOpenTopics(!openTopics)}
                            className={`transition-transform duration-300 ${
                                openTopics ? "rotate-0" : "rotate-180"
                            }`}
                        >
                            <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.67 4.29883L5.41 1.03883C5.025 0.653827 4.395 0.653827 4.01 1.03883L0.75 4.29883"
                                    stroke="#0B0F0E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openTopics ? "max-h-60" : "max-h-0"
                        }`}
                    >
                        <div className="space-y-3">
                            {[
                                "Product Quality",
                                "Seller Services",
                                "Product Price",
                                "Shipment",
                                "Match with Description",
                            ].map((topic) => (
                                <label
                                    key={topic}
                                    className="flex items-center gap-2 text-[#818B9C]"
                                >
                                    <input type="checkbox" className="w-4 h-4" />
                                    {topic}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
