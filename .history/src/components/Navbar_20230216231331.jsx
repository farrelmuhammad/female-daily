import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full lg:container">
            <div className="border-t border-b border-black py-1" />
            <div className="flex justify-between flex-col px-4 lg:px-0 md:flex-row py-8">
                <div className="w-2/3 md:hidden">
                    <img src="/img/logo.png" alt="company-logo" />
                </div>
                <div className="flex flex-col md:flex-row mt-8 lg:mt-0">
                    {/* <h4 className="uppercase font-bold text-black text-sm md:pr-4 md:border-r-2 border-primary mb-2 lg:mb-0">
                      <Link href="/"><a>About Us</a></Link>
                  </h4>
                  <h4 className="uppercase font-bold text-black text-sm md:px-4 md:border-r-2 border-primary mb-2 lg:mb-0">
                      <Link href="/"><a>Advertise With Us</a></Link>
                  </h4>
                  <h4 className="uppercase font-bold text-black text-sm md:px-4 md:border-r-2 border-primary mb-2 lg:mb-0">
                      <Link href="/"><a>Contact Us</a></Link>    
                  </h4>
                  <h4 className="uppercase font-bold text-black text-sm md:pl-4 mb-2 lg:mb-0">
                      <Link href="/"><a>Career</a></Link>
                  </h4> */}
                </div>
                <div className="flex mt-8 lg:mt-0">
                    <span className="uppercase underline text-sm">kembali ke atasa</span>
                    <svg
                        className="w-5 h-5 ml-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar