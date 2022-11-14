import React from 'react'
import { NavLink } from 'react-router-dom'
import {RiShoppingCart2Fill} from 'react-icons/ri'
const Navbar = () => {
  return (
    <div>
        <ul className='bg-red-300 py-8 px-4 flex justify-around'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="products">Products</NavLink>
            <NavLink to="cart" className="flex">Cart <RiShoppingCart2Fill size={30} className="ml-3"/></NavLink>
            <NavLink to="checkout">Checkout</NavLink>
        </ul>
    </div>
  )
}

export default Navbar