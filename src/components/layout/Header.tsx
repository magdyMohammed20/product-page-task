
function Header() {
    return (
        <header>
            <div className="mx-auto bg-black ps-[66px] pe-[89px] py-3 md:px-5 text-white text-sm">
                <span className="text-center block">New season coming!  Discount 10% for all product!  Checkout Now! <span className="bg-[#383838] ms-3 text-xs rounded-2xl py-0.5 px-2.5">20:40</span></span>
            </div>
            <nav className="container border-b-gray border-b pb-6 md:pb-8 border-dashed mx-auto px-5 flex items-center justify-between my-6 md:my-8">
                <a className="inline-flex" href="/">
                    <img className="w-[150px] md:w-[170px]" src="../../public/logo.png" alt="" />
                </a>
                <div className="flex gap-2.5">
                    <ul className="flex items-center font-medium">
                        <li className="flex mx-2 md:mx-4">
                            <button >
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_57_1326)">
                                        <path d="M14.5835 14.5833L18.3335 18.3333" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.6665 9.16669C16.6665 5.02455 13.3087 1.66669 9.1665 1.66669C5.02437 1.66669 1.6665 5.02455 1.6665 9.16669C1.6665 13.3089 5.02437 16.6667 9.1665 16.6667C13.3087 16.6667 16.6665 13.3089 16.6665 9.16669Z" stroke="#141414" strokeWidth="1.5" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_57_1326">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </li>
                        <li className="mx-2 md:mx-4 hidden md:block">
                            <button className="flex items-center gap-2">
                                Categories
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 8C15 8 11.3176 13 10 13C8.68233 13 5 8 5 8" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </li>
                        <li className="mx-2 md:mx-4 hidden md:block">
                            <button className="flex items-center gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.48131 12.9013C4.30234 13.6033 1.21114 15.0367 3.09389 16.8305C4.01359 17.7066 5.03791 18.3333 6.32573 18.3333H13.6743C14.9621 18.3333 15.9864 17.7066 16.9061 16.8305C18.7888 15.0367 15.6977 13.6033 14.5187 12.9013C11.754 11.2551 8.24599 11.2551 5.48131 12.9013Z" stroke="#141414" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.75 5.41669C13.75 7.48775 12.0711 9.16669 10 9.16669C7.92893 9.16669 6.25 7.48775 6.25 5.41669C6.25 3.34562 7.92893 1.66669 10 1.66669C12.0711 1.66669 13.75 3.34562 13.75 5.41669Z" stroke="#141414" strokeWidth="1.25" />
                                </svg>
                                Sign in
                            </button>
                        </li>
                        <li className="mx-2 md:mx-4 hidden md:block">
                            <button className="flex items-center gap-2">
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.3017 1.57876C13.0669 0.207998 11.1165 0.760398 9.94484 1.64031C9.46434 2.00111 9.22418 2.1815 9.08284 2.1815C8.94151 2.1815 8.70134 2.00111 8.22084 1.64031C7.04919 0.760398 5.09875 0.207998 2.86404 1.57876C-0.0687643 3.37776 -0.732388 9.31272 6.03245 14.3198C7.32094 15.2735 7.96518 15.7503 9.08284 15.7503C10.2005 15.7503 10.8448 15.2735 12.1333 14.3198C18.8981 9.31272 18.2344 3.37776 15.3017 1.57876Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </button>
                        </li>
                        <li className="mx-2 md:mx-4 ">
                            <button className="flex items-center gap-2 relative">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.58317 6.66669H16.8298C17.3505 6.66669 17.6108 6.66669 17.8014 6.75072C18.6445 7.12244 18.2676 8.05898 18.1258 8.73202C18.1003 8.85294 18.0173 8.95585 17.9012 9.01102C17.4193 9.23969 17.0817 9.67344 16.9931 10.1779L16.4993 12.9899C16.282 14.2271 16.2078 15.9953 15.1235 16.8669C14.328 17.5 13.1818 17.5 10.8894 17.5H9.11026C6.81786 17.5 5.67167 17.5 4.87617 16.8669C3.79194 15.9952 3.71766 14.2271 3.50039 12.9899L3.00656 10.1779C2.91798 9.67344 2.58045 9.23969 2.09851 9.01102C1.98231 8.95585 1.89944 8.85294 1.87396 8.73202C1.73212 8.05898 1.35517 7.12244 2.19827 6.75072C2.38887 6.66669 2.64919 6.66669 3.16981 6.66669H6.24984" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M11.6668 10H8.3335" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.4165 9.16667L8.33317 2.5M12.4998 2.5L14.5832 6.66667" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                                <span className="absolute text-[8px] -top-2 -end-2 bg-black text-white py-0.5 px-1.5 rounded-full">1</span>
                            </button>
                        </li>
                    </ul>
                    <button className="md:hidden">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.3335 4.16669H16.6668" stroke="#141414" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.3335 10H16.6668" stroke="#141414" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3.3335 15.8333H16.6668" stroke="#141414" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header