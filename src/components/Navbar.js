import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <ul className='bg-red-300 py-8 px-4 flex justify-around'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="products">Products</NavLink>
            <NavLink to="checkout">Checkout</NavLink>
        </ul>
    </div>
  )
}

export default Navbar