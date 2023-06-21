import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {RiLoginCircleLine, RiLogoutCircleLine} from 'react-icons/ri'
import { useUserContext } from '../context/UserContext'
import { useCartContext } from '../context/CartContext'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
const MobileNav = () => {

  const {loginWithRedirect,logout,myUser}=useUserContext();
  const {cart_products}= useCartContext();
  const  [navopen, setNavOpen]= useState(false);

  const toggleNav= ()=>{
    setNavOpen(!navopen);
  }

  return (
    <div className='block md:hidden px-8'>
        <div className='flex justify-between items-center border-b-[1px]'>
            <h1 className='text-xl font-semibold my-6'>TECH-COMMERCE</h1>
            <div onClick={toggleNav}>
               {navopen?<AiOutlineClose/>:<GiHamburgerMenu/>}  
            </div>
        </div>
      
        <ul className={navopen?'py-2 px-4 text-sm h-full transition duration-300 ease-in':'h-0 overflow-hidden transition duration-300 ease-in'}>
            <NavLink to="/" className="block transition duration-300 hover:scale-[110%] my-3">HOME</NavLink>
            <NavLink to="about" className=" block transition duration-300 hover:scale-[110%] my-3">ABOUT</NavLink>
            <NavLink to="products" className=" block transition duration-300 hover:scale-[110%] my-3">PRODUCTS</NavLink>
            <NavLink to="cart" className="block transition duration-300 hover:scale-[110%] my-3">CART({cart_products.length}) </NavLink>
            {myUser && <NavLink to="checkout" className="flex transition duration-300 hover:scale-[110%] my-3">CHECKOUT</NavLink>}
            {myUser?<button className='mx-auto w-fit px-2 transition duration-300 hover:scale-[110%] flex my-3' onClick={(e)=>{logout({returnTo:window.location.origin})}}><RiLogoutCircleLine size={20}/>Logout</button>:
            <button className='mx-auto w-fit px-2 transition duration-300 hover:scale-[110%] flex my-3' onClick={loginWithRedirect}>LOGIN<RiLoginCircleLine size={20} className='ml-1'/></button>
            }            
        </ul>
    </div>
  )
}

export default MobileNav;