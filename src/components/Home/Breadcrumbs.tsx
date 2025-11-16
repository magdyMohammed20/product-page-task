function Breadcrumbs({ name }: { name: string }) {
    return (
        <div className="flex flex-wrap gap-2 text-sm md:text-base items-center text-gray">
            <span>Homepage</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.45508 9.96004L7.71508 6.70004C8.10008 6.31504 8.10008 5.68504 7.71508 5.30004L4.45508 2.04004" stroke="#818B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Women</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.45508 9.96004L7.71508 6.70004C8.10008 6.31504 8.10008 5.68504 7.71508 5.30004L4.45508 2.04004" stroke="#818B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Women's Shirts & Tops</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.45508 9.96004L7.71508 6.70004C8.10008 6.31504 8.10008 5.68504 7.71508 5.30004L4.45508 2.04004" stroke="#818B9C" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-black">{name}</span>
        </div>
    )
}

export default Breadcrumbs
