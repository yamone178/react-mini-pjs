import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { Circles } from 'react-loader-spinner'

const Home = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    
    
    async function fetchProducts(){
        try{
            setLoading(true)
            const res = await fetch('https://fakestoreapi.com/products')
            const products = await res.json()

           if(products){
             setProducts(products)
             setLoading(false)
           }
        }catch(e){
            console.log(e.message);
            setLoading(false)
        }
    }

    useEffect(()=>{
     fetchProducts()   
    }, [])
    

  return (
    <div className='m-5'>
      {
        loading ? 
        <Circles 
          width={'100'}
          height={'100'}
          color='blue'
          visible={true}
        />: (
          <div className="grid grid-cols-4">
          {
                         
            products && products.length > 0  ?
            products.map((product) => <ProductItem key={product.id} product={product} />)
            : null
          }
      </div>
        )
      }
       
    </div>
  )
}

export default Home