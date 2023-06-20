import React from 'react'
import Hero from '../components/Hero'
import HeroImg2 from "../images/hero2.jpg"


const About = () => {
  const details= {
    heading:"A shop for your Tech",
    description:"Tech-commerce promises best deals, best prices and best service" 
  };
  return (
    <div className='max-w-content mx-auto px-8'>
      <Hero image={HeroImg2} details={details}/>
      <div>
        <h1 className='rounded uppercase mb-8 text-left text-2xl border-b-2 pb-2'>About us</h1>
        <p className='text-left my-8'>Born from a background of tech enthusiasts and inspired by modern tech trends, Tech Commerce is an Finnish tech store that matches technology with affordability. We are determined to serve the interest of our customers.</p>
        <p className='text-left my-8'>Our aim is to provide affordable gadgets for the modern customers. We are committed to sustainability, and the world we live in is celebrated through innovations and creativity. We generate opportunity for everyone to  use the modern available technology.</p>
      </div>

    </div>
  )
}

export default About