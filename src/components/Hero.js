import React from 'react'
import HeroImg from "../images/hero1.jpg"

const Hero = ({align}) => {
  return (
    <div className='grid grid-cols-2 place-items-center p-8 gap-x-6'>
        <div className='col-span-1 text-left'>
            <h3> Here will be subheading</h3>
            <h1>Here will the heading for Title</h1>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip.</p>
            <h3>Price in $</h3>
            <button className='bg-orange-400 px-3 py-1 text-white'>Add to cart</button>
        </div> 
        <img src={HeroImg} className={`${align?"col-span-1 order-first":"col-span-1 order-last"}`} alt="heroimage"/>
    </div> 
    
  )
}

export default Hero;