import React, { useEffect, useState } from 'react'

const LoadMore = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null)

    async function fetchProducts(){
      try {
        setLoading(true)

        let result = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count* 10}`)
        let data = await result.json()
        

        if (data && data.products && data.products.length) {
          setProducts((preProducts) => [...preProducts, ...data.products])
          setLoading(false)
          
        }
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    const loadmoreButton = () =>{
      setCount(count+1)
    }

console.log(products, count);
   

    useEffect(()=>{
      fetchProducts()
      
    }, [count])

    if (error !== null) {
      return <div>{error}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {
          products && products.length > 0 ?
            products.map((item, index)=>
              <div key={index} className='w-[200px] h-[200px] '>
                <img src={item.thumbnail} alt="" className='object-cover w-full'/>
              </div>
            )
          :''
        }
      </div>

      <button onClick={loadmoreButton} className="p-2 text-white bg-black w-[100px] mt-5 text-center">Load More</button>
    </div>
  )
}

export default LoadMore
