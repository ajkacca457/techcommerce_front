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
    <div className='fixed top-0 left-0 h-auto w-full z-20 md:hidden px-8 bg-black'>
        <div className='flex justify-between items-center'>
            <h1 className='text-xl font-semibold my-4 text-white'>TECH-COMMERCE</h1>
            <div onClick={toggleNav}>
               {navopen?<AiOutlineClose className='text-white'/>:<GiHamburgerMenu className='text-white'/>}  
            </div>
        </div>
      
        <ul className={navopen?'py-6 px-4 text-sm h-full transition-height duration-300 ease-out opacity-100 text-white':'h-0 overflow-hidden transition-all duration-300 ease-in opacity-0'}>
            <NavLink to="/" className="block transition duration-300 hover:scale-[110%] my-3" onClick={toggleNav}>HOME</NavLink>
            <NavLink to="about" className=" block transition duration-300 hover:scale-[110%] my-3" onClick={toggleNav}>ABOUT</NavLink>
            <NavLink to="products" className=" block transition duration-300 hover:scale-[110%] my-3" onClick={toggleNav}>PRODUCTS</NavLink>
            <NavLink to="cart" className="block transition duration-300 hover:scale-[110%] my-3" onClick={toggleNav}>CART({cart_products.length}) </NavLink>
            {myUser && <NavLink to="checkout" className="flex transition duration-300 hover:scale-[110%] my-3" onClick={toggleNav}>CHECKOUT</NavLink>}
            {myUser?<button className='mx-auto w-fit px-2 transition duration-300 hover:scale-[110%] flex my-3' onClick={(e)=>{logout({returnTo:window.location.origin});toggleNav()}}><RiLogoutCircleLine size={20}/>Logout</button>:
            <button className='mx-auto w-fit px-2 transition duration-300 hover:scale-[110%] flex my-3' onClick={loginWithRedirect}>LOGIN<RiLoginCircleLine size={20} className='ml-1'/></button>
            }            
        </ul>
    </div>
  )
}

export default MobileNav;