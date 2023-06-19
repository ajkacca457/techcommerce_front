import React from 'react'
import { NavLink } from 'react-router-dom';

const Hero = ({image, details:{heading,description}}) => {
  return (
    <div className='flex flex-col justify-center bg-center bg-cover min-h-[70vh] my-12 relative group' style={{backgroundImage:`url(${image})`}}>
      <div className='w-full h-full bg-black absolute top-0 left-0 opacity-40 z-0 transition ease-in duration-200 group-hover:opacity-60'></div>
      <div className='text-white w-1/2 mx-auto z-10'>
        <h3 className='text-3xl uppercase'> {heading?heading:"Demo Text"}</h3>
        <p>{description?description:"Demo text"}</p>
        <NavLink to="/products" className="bg-orange-400 uppercase px-3 py-2 block w-fit mx-auto rounded transition duration-300 hover:bg-orange-600">See products</NavLink>
      </div> 
    </div> 
    
  )
}

export default Hero;