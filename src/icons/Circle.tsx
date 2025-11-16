function Circle({ rating }: { rating: number }) {

    const percentage = (rating / 5) * 100;
    const strokeDasharray = 283;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

    return (
        <>
            <svg className="w-full h-full">
                <circle
                    cx="48"
                    cy="48"
                    r="45"
                    stroke="#E5E7EB"
                    strokeWidth="6"
                    fill="none"
                />
            </svg>
            
            <svg className="w-full h-full -rotate-90 absolute top-0 left-0">
                <circle
                    cx="48"
                    cy="48"
                    r="45"
                    stroke="#F59E0B"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>
        </>
    )
}

export default Circle
