import React from 'react'
import HeroImg from "../images/hero1.jpg"

const Hero = () => {
  return (
    <div className='flex flex-col justify-center bg-center bg-cover min-h-[70vh] my-8' style={{backgroundImage:`url(${HeroImg})`}}>
        <div className='bg-black text-white w-1/2 mx-auto'>
            <h3 className='text-5xl uppercase'> Here will be subheading</h3>
            <h1>Heading</h1>
            <p>All description</p>
            <h3>Price in $</h3>
            <button className='bg-orange-400 px-3 py-1 text-white'>Add to cart</button>
        </div> 
    </div> 
    
  )
}

export default Hero;