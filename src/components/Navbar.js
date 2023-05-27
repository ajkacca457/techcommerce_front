import React from 'react'
import { NavLink } from 'react-router-dom'
import {RiShoppingCart2Fill,RiLoginCircleLine, RiLogoutCircleLine} from 'react-icons/ri'
import { useUserContext } from '../context/UserContext'
const Navbar = () => {

  const {loginWithRedirect,logout,myUser}=useUserContext();

  return (
    <div>
      <h1 className='text-4xl my-8'>TECH-COMMERCE</h1>
        <ul className='py-2 px-4 flex justify-around w-1/2 mx-auto'>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="about">ABOUT</NavLink>
            <NavLink to="products">PRODUCTS</NavLink>
            <NavLink to="cart" className="flex">CART <RiShoppingCart2Fill size={20} className="ml-1"/></NavLink>
            {myUser && <NavLink to="checkout">CHECKOUT</NavLink>}
            {myUser?<button className='flex items-center border-2 border-gray-500 px-2 py-1' onClick={(e)=>{logout({returnTo:window.location.origin})}}><RiLogoutCircleLine size={20}/>Logout</button>:
            <button className='flex items-center border-0 px-2 py-1' onClick={loginWithRedirect}>LOGIN<RiLoginCircleLine size={20} className='ml-1'/></button>
            }            
        </ul>
    </div>
  )
}

export default Navbar