import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'

const Cart = () => {
 const {cart_products}= useCartContext();

 if(cart_products.length<=0) {
    return ( 
    <div>
        <h3>There are no products in the cart.</h3>
        <NavLink to="/products" className="bg-orange-600 px-2 py-1 text-white">Continue Shopping..</NavLink> 
    </div>
    )
 }

  return (
    <div>Cart items display</div>
  )
}

export default Cart