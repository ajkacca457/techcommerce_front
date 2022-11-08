import React from 'react'
import HeroImg from "../images/hero1.jpg"

const Hero = () => {
  return (
    <div className='grid grid-cols-2 place-items-center p-8'>
        <p className='col-span-1'>Here is the hero element</p> 
        <img src={HeroImg} className='col-span-1' alt="heroimage"/>
    </div>
    
  )
}

export default Hero;