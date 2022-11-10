import React, { useState } from 'react'
import {TbSquareMinus,TbSquarePlus} from "react-icons/tb"

const AddToCart = ({stock}) => {
    const [amount,setAmount]=useState(1);

    const increase=()=> {
        setAmount((oldAmount)=>{
            let tempAmount= oldAmount+1;
            if(tempAmount>stock) {
                tempAmount=stock;
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
    <div className='flex w-full bg-sky-400 justify-center items-center my-4 py-2'>
        <TbSquareMinus size={25} onClick={decrease}/>
        <p className='text-[150%]'>{amount}</p>
        <TbSquarePlus size={25} onClick={increase}/>
    </div>
  )
}

export default AddToCart