import React from 'react'
import Hero from '../components/Hero'
import HeroImg2 from "../images/hero2.jpg"


const About = () => {
  const details= {
    heading:"A shop for your Tech",
    description:"Tech-commerce promises best deals, best prices and best service" 
  };
  return (
    <div className='max-w-content mx-auto'>
      <Hero image={HeroImg2} details={details}/>
    </div>
  )
}

export default About