import React from 'react'
import HeroImg from "../images/hero1.jpg"

const Hero = () => {
  return (
    <div className='grid grid-cols-2 place-items-center p-8 gap-x-6'>
        <div className='col-span-1 text-left'>
            <h3> Here will be subheading</h3>
            <h1>Heading</h1>
            <p>All description</p>
            <h3>Price in $</h3>
            <button className='bg-orange-400 px-3 py-1 text-white'>Add to cart</button>
        </div> 
        <img src={HeroImg} className="col-span-1" alt="heroimage"/>
    </div> 
    
  )
}

export default Hero;