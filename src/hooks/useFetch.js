import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    useEffect(()=>{
        const fetchData = async () =>{
            const resp = await fetch(url);
            const data = await resp.json();
            setData(data)
        }
        fetchData();
    
    }, [url])

    return {data}

}

export default useFetch