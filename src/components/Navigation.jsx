import React, { useState } from 'react'

const Navigation = () => {
    const [category, setCategory] = useState([
        {
            id: 1,
            name: 'Skincare',
        },
        {
            id: 2,
            name: 'Make Up',
        },
        {
            id: 3,
            name: 'Body',
        },
        {
            id: 4,
            name: 'Hair',
        },
        {
            id: 5,
            name: 'Fragrance',
        },
        {
            id: 6,
            name: 'Nails'
        },
        {
            id: 7,
            name: 'Tools'
        },
        {
            id: 8,
            name: 'Brands'
        },
    ]);

    // useEffect(() => {
    //     setLanguage(localStorage.getItem("language") ?? "id");
    //     cookies.set("language", localStorage.getItem("language") ?? "id");

    //     axios
    //         .get(`${process.env.category_url}/api/v2/categories/list-tree`, {
    //             headers: {
    //                 lang: localStorage.getItem("language") ?? language,
    //             },
    //         })
    //         .then((res) => {
    //             var newCategory = res.data.data;
    //             newCategory = newCategory.filter(
    //                 (item) => item.id !== 14 && item.id !== 16
    //             );
    //             setCategory(newCategory);
    //         })
    //         .catch((err) => console.log(err));
    // }, []);

    return (
        <nav className="py-2 border-b border-black hidden lg:block dark:border-white lg:container">
            <ul className="flex justify-around">
                {category.slice(0, 10).map((category) => (
                    <li
                        className="relative font-bold text-sm hover:bg-gray-200 py-2\ px-4 rounded"
                        key={category.id}
                    >
                        <a className="uppercase">
                            {category.name}
                        </a>
                        {/* <div
                            className={`-left-4 absolute py-4 group-hover:block hidden top-6 z-20`}
                            style={{ minWidth: 200 }}
                        >
                            <ul className="bg-white shadow rounded pt-2 pb-1">
                                {category.child.map((data) => (
                                    <li
                                        key={data.id}
                                        className="mb-2 hover:bg-gray-300 py-2 px-4 cursor-pointer"
                                    >
                                        <a
                                            className="capitalize"
                                            href={`subcategories/${data.url}`}
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation