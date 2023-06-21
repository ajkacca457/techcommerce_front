import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import CartItem from '../components/CartItem';

const Cart = () => {
 const {cart_products, total_amount, clearCart}= useCartContext();

 if(cart_products.length<=0) {
    return ( 
    <div>
        <h3>There are no products in the cart.</h3>
        <NavLink to="/products" className="bg-orange-600 px-2 py-1 text-white">Add Items</NavLink> 
    </div>
    )
 }

  return (
    <div className='max-w-content mx-auto px-8'>
        {cart_products.map((item)=>{
            return (
               <CartItem {...item} key={item.productid}/> 
            )
        })}

        <div className='bg-slate-800 p-4 mx-auto my-8'>
            <div className='flex justify-between my-2'>
                <NavLink to="/products" className="bg-orange-600 text-white px-2 py-1">Continue shopping</NavLink>   
                <button className='bg-black text-white px-2 py-1' onClick={clearCart}>Clear Cart</button>
            </div>

            <div>
                <h3 className='uppercase text-white text-xl'>Total: {total_amount}€</h3>
            </div>

        </div>
    </div>
  )
}

export default Cart