import React from 'react'
import { NavLink } from 'react-router-dom'
import {RiShoppingCart2Fill,RiLoginCircleLine, RiLogoutCircleLine} from 'react-icons/ri'
import { useUserContext } from '../context/UserContext'
const Navbar = () => {

  const {loginWithRedirect,logout,myUser}=useUserContext();

  return (
    <div>
      <h1 className='text-3xl font-semibold my-6'>TECH-COMMERCE</h1>
        <ul className='py-2 px-4 flex text-sm justify-center gap-x-8 w-1/2 mx-auto border-b-2 pb-4'>
            <NavLink to="/" className="transition duration-300 hover:scale-125">HOME</NavLink>
            <NavLink to="about" className="transition duration-300 hover:scale-125">ABOUT</NavLink>
            <NavLink to="products" className="transition duration-300 hover:scale-125">PRODUCTS</NavLink>
            <NavLink to="cart" className="flex transition duration-300 hover:scale-125">CART</NavLink>
            {myUser && <NavLink to="checkout" className="flex transition duration-300 hover:scale-125">CHECKOUT</NavLink>}
            {myUser?<button className='flex items-center border-2 border-gray-500 px-2 transition duration-300 hover:scale-125' onClick={(e)=>{logout({returnTo:window.location.origin})}}><RiLogoutCircleLine size={20}/>Logout</button>:
            <button className='flex items-center border-0 px-2 transition duration-300 hover:scale-125' onClick={loginWithRedirect}>LOGIN<RiLoginCircleLine size={20} className='ml-1'/></button>
            }            
        </ul>
    </div>
  )
}

export default Navbar