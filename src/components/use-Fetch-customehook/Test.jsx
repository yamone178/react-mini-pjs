import React from 'react'
import useFetchData from './useFetchData'

const Test = () => {
    const {data, error, pending} = useFetchData("https://dummyjson.com/products",{})

    if (pending) {
        return <div>Pending....</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    console.log(data);
  return (
    <div>
        <h2>use Fetch custom hook</h2>

        {
            data && data.products && data.products.length ?
            data.products.map((item)=>(
                <p key={item.key}>{item.title}</p>
            ))
            : null
        }
    

    </div>
  )
}

export default Test