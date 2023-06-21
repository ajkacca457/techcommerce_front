import React, { useState } from 'react'
import {HiOutlinePlus,HiOutlineMinus} from "react-icons/hi"
import {GrAddCircle} from "react-icons/gr"
import { useCartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'

const AddToCart = ({item:{Stock,productid,fields}}) => {
    const [amount,setAmount]=useState(1);
    const { addItemsToCart }=useCartContext();

    const increase=()=> {
        setAmount((oldAmount)=>{
            let tempAmount= oldAmount+1;
            if(tempAmount>Stock) {
                tempAmount=Stock;
            }
            return tempAmount;
        })
    }

    const decrease= ()=> {
        setAmount((oldAmount)=>{
           let tempAmount=oldAmount-1;
           if(tempAmount<=0) {
            tempAmount=1;
           }
            return tempAmount;
        })
    }
  return (
    <div>
    <div className='flex w-full justify-center items-center my-2 py-2 gap-x-4'>
        <HiOutlineMinus size={15} onClick={decrease}/>
        <p className='text-lg'>{amount}</p>
        <HiOutlinePlus size={15} onClick={increase}/>
    </div>

    <NavLink to="/cart" className='bg-sky-700 uppercase px-2 py-1 block w-fit mx-auto text-white text-sm rounded transition duration-300 hover:bg-sky-800' onClick={(e)=>{addItemsToCart(productid,amount,fields)}}>
     Add to cart
    </NavLink>
    
    </div>
  )
}

export default AddToCart