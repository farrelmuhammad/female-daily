import React from 'react'

const Billboard = ({text}) => {
    return (
        <>
            <div className="flex flex-wrap justify-center py-2">
                <div className="bg-gray-300 w-[970px] h-[250px]">
                    <h2 className="text-gray-600 text-center text-2xl font-bold p-2">{text}</h2>
                </div>
            </div>
        </>
    )
}

export default Billboard