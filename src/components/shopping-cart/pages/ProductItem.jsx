import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/slices/CartSlice'

const ProductItem = ({product}) => {

 const dispatch = useDispatch()

 const cart = useSelector((state)=> state.cart)


  const handleAddToCart = () =>{
    
    dispatch(addToCart(product))

    console.log(cart);
  }

  const handleRemoveCart = () =>{
    dispatch(removeFromCart(product.id))
    console.log(cart);  
  }

  

  return (
    <div className='w-[200px]  shadow-lg p-3 m-2'>
        <img src={product?.image} alt="" />
        <h2>{product?.title}</h2>
        <h3>{product?.price}</h3>
        <button onClick={cart.some((item) => item.id === product?.id) ? handleRemoveCart: handleAddToCart}
        className='p-2 mt-3 text-white bg-black'>
        {
           cart.some((item) => item.id === product?.id) ? 'Remove from cart' : 'add to cart'
        }
        </button>
    </div>
  )
}

export default ProductItem