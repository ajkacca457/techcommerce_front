import React from 'react'
import { useCartContext } from '../context/CartContext'
const CartItem = ({name,image,amount,price,productid}) => {
    const {removeItemFromCart}= useCartContext();
  return (
    <div className='grid grid-cols-4 gap-x-4 mx-auto my-10 place-items-center bg-slate-300 p-4 rounded'>
        <div className='col-span-1 justify-self-center text-sm'>
            {image && <img src={image} alt={name} className="w-[100px] h-[80px] mx-auto mb-2"/>}
            <h3>{name}</h3>
        </div>   

        <div className='col-span-1 justify-self-center text-sm uppercase'>
            <h3>Number of Items</h3>
            <p>{amount}</p>
        </div>

        <div className='col-span-1 justify-self-center text-sm uppercase'>
            <h3>Subtotal</h3>
            {amount*price}€
        </div>

        <button className='bg-red-800 uppercase px-2 py-1 block w-fit mx-auto text-white text-sm rounded transition duration-300 hover:bg-red-600' onClick={(e)=>{removeItemFromCart(productid)}} >Delete</button>

    </div>
  )
}

export default CartItem