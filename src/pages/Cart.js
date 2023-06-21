import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import CartItem from '../components/CartItem';

const Cart = () => {
 const {cart_products, total_amount, clearCart}= useCartContext();

 if(cart_products.length<=0) {
    return ( 
    <div className='max-w-content mx-auto px-8 mt-[80px] md:my-8'>
        <h3 className='my-4'>There are no products in the cart.</h3>
        <NavLink to="/products" className="bg-sky-700 uppercase px-2 py-1 mx-auto block w-fit text-white text-sm rounded transition duration-300 hover:bg-sky-800">Add Items</NavLink> 
    </div>
    )
 }

  return (
    <div className='max-w-content mx-auto px-8  mt-[80px] md:mt-0'>
        {cart_products.map((item)=>{
            return (
               <CartItem {...item} key={item.productid}/> 
            )
        })}

        <div className='bg-slate-800 p-4 mx-auto md:my-8'>
            <div className='block md:flex md:justify-between my-2'>
                <NavLink to="/products" className="mx-auto bg-sky-700 uppercase px-2 py-1 block w-fit text-white text-sm rounded transition duration-300 hover:bg-sky-800">Continue shopping</NavLink>   
                <button className='my-4 md:my-0 mx-auto bg-red-800 uppercase px-2 py-1 block w-fit text-white text-sm rounded transition duration-300 hover:bg-red-600' onClick={clearCart}>Clear Cart</button>
            </div>

            <div>
                <h3 className='uppercase text-white text-xl'>Total: {total_amount}€</h3>
            </div>

        </div>
    </div>
  )
}

export default Cart