import React from 'react'

const Hero = ({image}) => {
  return (
    <div className='flex flex-col justify-center bg-center bg-cover min-h-[70vh] my-12 relative group' style={{backgroundImage:`url(${image})`}}>
      <div className='w-full h-full bg-black absolute top-0 left-0 opacity-40 z-0 transition ease-in duration-200 group-hover:opacity-60'></div>
      <div className='text-white w-1/2 mx-auto z-10'>
        <h3 className='text-3xl uppercase'> Here will be subheading</h3>
        <p>All description</p>
        <h3>Price in $</h3>
        <button className='bg-orange-400 px-3 py-1 text-white rounded'>Add to cart</button>
      </div> 
    </div> 
    
  )
}

export default Hero;