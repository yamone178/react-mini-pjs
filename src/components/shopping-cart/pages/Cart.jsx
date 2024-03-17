import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem';
import { useEffect } from 'react';

const Cart = () => {

  const [totalAmount, setTotalAmount] = useState(0)
  
 const cart = useSelector(state => state.cart)

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, item) => acc + item.price, 0))
  }, [cart])
  
  return (
    <div className='flex '>
  

      <div className=''>
      {
        cart && cart.length >0 ? 
        cart.map((product) => <ProductItem key={product.id} product={product} />)
        
        : ''
      }
      </div>

      <div className="w-[300px] h-[100px] bg-black p-3">
      <h2 className='text-white'>Total item - {cart.length}</h2>
        <h2 className='text-white'>Total Amount - {totalAmount}</h2>
      </div>
    </div>
  )
}

export default Cart