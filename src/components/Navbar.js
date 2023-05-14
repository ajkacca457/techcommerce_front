import React from 'react'
import { NavLink } from 'react-router-dom'
import {RiShoppingCart2Fill,RiLoginCircleLine, RiLogoutCircleLine} from 'react-icons/ri'
import { useUserContext } from '../context/UserContext'
const Navbar = () => {

  const {loginWithRedirect,logout,myUser}=useUserContext();

  return (
    <div>
        <ul className='bg-red-500 py-8 px-4 flex justify-around'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="products">Products</NavLink>
            <NavLink to="cart" className="flex">Cart <RiShoppingCart2Fill size={30} className="ml-3"/></NavLink>
            {myUser && <NavLink to="checkout">Checkout</NavLink>}
            {myUser?<button className='flex items-center border-2 border-gray-500 px-2 py-1' onClick={(e)=>{logout({returnTo:window.location.origin})}}><RiLogoutCircleLine size={20}/>Logout</button>:
            <button className='flex items-center border-2 border-gray-500 px-2 py-1' onClick={loginWithRedirect}><RiLoginCircleLine size={20}/>Login</button>
            }            
        </ul>
    </div>
  )
}

export default Navbar