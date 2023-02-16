import React, { useState } from 'react'

const Navbar = () => {
    const [category, setCategory] = useState([
        "Market",
        "finansial",
        "ekonomi",
        "industri",
        "aktual",
        "teknologi",
        "kesehatan",
        "andrawina",
    ]);

    return (
        <nav
            className={`border-t-2 border-dotted border-primary py-8 hidden lg:flex lg:container`}
        >
            {category.map((category, idx) => (
                <div className="w-1/8" key={idx}>
                    <h4 className="text-sm font-bold text-primary mb-8 uppercase">
                        {category}
                    </h4>
                    <ul className="text-sm">
                        <li className="font-bold hover:text-gray-500 mb-4">
                            {/* <Link href="/"> */}
                            <a>Opini</a>
                            {/* </Link> */}
                        </li>
                        <li className="font-bold hover:text-gray-500 mb-4">
                            {/* <Link href="/"> */}
                            <a>Editorial</a>
                            {/* </Link> */}
                        </li>
                        <li className="font-bold hover:text-gray-500 mb-4">
                            {/* <Link href="/"> */}
                            <a>Surat Pembaca</a>
                            {/* </Link> */}
                        </li>
                        <li className="font-bold hover:text-gray-500 mb-4">
                            {/* <Link href="/"> */}
                            <a>Spektrum</a>
                            {/* </Link> */}
                        </li>
                    </ul>
                </div>
            ))}
        </nav>
    );
}

export default Navbar