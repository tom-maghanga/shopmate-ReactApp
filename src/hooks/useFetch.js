import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            const resp = await fetch(url);
            const data = await resp.json();
            setLoading(false)
            setData(data)
        }
        fetchData();
    
    }, [url])

    return {data, loading}

}

export default useFetch