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
    <div className='flex w-full justify-center items-center my-4 py-2 gap-x-4'>
        <HiOutlineMinus size={15} onClick={decrease}/>
        <p className='text-lg'>{amount}</p>
        <HiOutlinePlus size={15} onClick={increase}/>
    </div>

    <NavLink to="/cart" className='bg-orange-600 text-white flex mx-auto px-2 py-1 rounded-md my-2 w-fit h-fit' onClick={(e)=>{addItemsToCart(productid,amount,fields)}}>
        <GrAddCircle size={25} className="text-white mr-2"/> Add to cart
    </NavLink>
    
    </div>
  )
}

export default AddToCart