import React from 'react'
import { useCartContext } from '../context/CartContext'
import {BsBasket} from "react-icons/bs";

const CartItem = ({name,image,amount,price,productid}) => {
    const {removeItemFromCart}= useCartContext();
  return (
    <div className='grid grid-cols-4 gap-x-4 mx-auto my-10 place-items-center bg-slate-300 p-4 rounded group'>
        <div className='col-span-full md:col-span-1 justify-self-center text-sm'>
            {image && <img src={image} alt={name} className="w-[100px] h-[80px] mx-auto mb-6 md:mb-2 transition duration-300 group-hover:scale-125"/>}
            <h3 className='my-2 md:my-0'>{name}</h3>
        </div>   

        <div className='col-span-full md:col-span-1 flex gap-x-2 md:block justify-self-center text-sm uppercase group my-2 md:my-0'>
            <div className='flex gap-x-1'><BsBasket className='group-hover:animate-jump'/> <h3>Number of Items</h3></div>
            <p className='font-semibold text-sm md:text-lg'>{amount}</p>
        </div>

        <div className='col-span-full md:col-span-1 flex gap-x-2 md:block justify-self-center text-sm uppercase my-2 md:my-0'>
            <h3>Subtotal</h3>
            <p className='font-semibold text-sm md:text-lg'>{amount*price}€</p>
        </div>

        <button className='col-span-full md:col-span-1 bg-red-800 uppercase px-2 py-1 block w-fit mx-auto text-white text-sm rounded transition duration-300 hover:bg-red-600' onClick={(e)=>{removeItemFromCart(productid)}} >Delete</button>

    </div>
  )
}

export default CartItem