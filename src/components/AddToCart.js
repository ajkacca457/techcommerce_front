import React, { useState } from 'react'
import {TbSquareMinus,TbSquarePlus} from "react-icons/tb"
import {GrAddCircle} from "react-icons/gr"
import { useCartContext } from '../context/CartContext'
import uuid from 'react-uuid';

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
    <div className='flex w-full bg-sky-400 justify-center items-center my-4 py-2'>
        <TbSquareMinus size={25} onClick={decrease}/>
        <p className='text-[150%]'>{amount}</p>
        <TbSquarePlus size={25} onClick={increase}/>
    </div>

    <button className='bg-orange-600 text-white flex mx-auto px-2 py-1 rounded-md my-2' onClick={(e)=>{addItemsToCart(productid,amount,fields)}}>
        <GrAddCircle size={25} className="text-white mr-2"/> Add to cart
    </button>
    
    </div>
  )
}

export default AddToCart