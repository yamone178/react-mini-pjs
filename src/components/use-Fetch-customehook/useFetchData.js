import React, { useEffect, useState } from 'react'

const useFetchData = (url, option={}) => {

    const [data, setData] = useState([])
    const [pending, setPending] = useState(false)
    const [error, setError] = useState(null)

    async function FetchData(){
        try {
            setPending(true)
            const res = await fetch(url, {...option})
            if(!res.ok) throw setError(res.statusText)
            console.log(res);
            const products = await res.json()

            if (products) {
                setData(products)
                setError(null)
                setPending(false)
            }
            
        } catch (error) {
            setError(error.message)
            setPending(false)
            
        }
    }
   useEffect(()=>{
    FetchData()
   },[url])


  return { data, error, pending}
}

export default useFetchData