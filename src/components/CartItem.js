import React from 'react'
import { useCartContext } from '../context/CartContext'
const CartItem = ({name,image,amount,price,productid}) => {
    const {removeItemFromCart}= useCartContext();
  return (
    <div className='flex justify-between w-[80%] mx-auto my-4'>
        <div>
            <img src={image} alt={name} className="w-[100px] h-[80px]"/>
            <h3>{name}</h3>
        </div>   

        <div>
            <h3>Number of Items</h3>
            <p>{amount}</p>
        </div>

        <div>
            <h3>Subtotal</h3>
            {amount*price}
        </div>

        <button className='bg-red-600 text-white h-fit w-fit px-2 py-1' onClick={(e)=>{removeItemFromCart(productid)}} >Delete</button>

    </div>
  )
}

export default CartItem