import React from 'react'
import { NavLink } from 'react-router-dom';

const Hero = ({image, details:{heading="Demo Text",description="Demo Text"}}) => {
  return (
    <div className='flex flex-col justify-center mt-[80px] md:mt-0 bg-center bg-cover min-h-[70vh] mt-6 mb-12 relative group' style={{backgroundImage:`url(${image})`}}>
      <div className='w-full h-full bg-black absolute top-0 left-0 opacity-40 z-0 transition ease-in duration-200 group-hover:opacity-60'></div>
      <div className='text-white w-1/2 mx-auto z-10'>
        <h3 className='text-2xl md:text-4xl uppercase'> {heading}</h3>
        <p className='my-6'>{description}</p>
        <NavLink to="/products" className="bg-sky-800 uppercase px-3 py-2 block w-fit text-sm mx-auto rounded transition duration-300 hover:bg-sky-700">See products</NavLink>
      </div> 
    </div> 
    
  )
}

export default Hero;