import React, { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            try{
            const resp = await fetch(url);
            if(!resp.ok){
                throw new Error(resp.statusText)
                
            }
            const data = await resp.json();
            setLoading(false)
            setData(data)
            }
            catch{
                console.log(Error)
            }
        }
        fetchData();
    
    }, [url])

    return {data, loading}

}

export default useFetch