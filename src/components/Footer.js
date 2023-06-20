import React from 'react'
import {FiSmartphone} from "react-icons/fi"

const Footer = () => {
  return (
    <div className='w-full bg-slate-700 text-white py-4'>
      <p>©Tech Commerce group.</p>
      <div className='flex items-center justify-center gap-x-1'><FiSmartphone className='text-white'/> +3580465200200</div>
    </div>
  )
}

export default Footer