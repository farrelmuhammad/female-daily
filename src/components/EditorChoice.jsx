import React, { useEffect } from 'react'
import fetch from '../helpers/fetch';
import useAsync from '../helpers/hooks/useAsync';

const EditorChoice = () => {
    const { data, error, run, isLoading } = useAsync();

//   const refContainer = useRef(null);

  useEffect(() => {
    run(
      fetch({
        url: "/hqms/FDN-WP/0.1/wp",
      })
    );
  }, [run]);

  console.log(data);

    return (
        <>
            <div className="flex flex-col justify-items-start px-8 py-8">
                <h3 className="text-start text-2xl font-bold p-2">Editor Choice</h3>
                <h3 className="text-start text-xl font-medium text-gray-400 p-2">Curated with love</h3>
            </div>
            <div className="flex flex-wrap justify-start px-10 py-2">
                <div className="bg-gray-300 p-3 h-[250px]">
                    <h2 className="text-gray-600 text-center text-2xl font-bold p-2">Editor Choice 970x250</h2>
                </div>
            </div>
        </>
    )
}

export default EditorChoice