import React from 'react'
import Hero from '../components/Hero';
import Services from '../components/Services';
import Featured from '../components/Featured';
import HeroImg from "../images/hero1.jpg"


const Home = () => {

  const details= {
    heading:"A shop for your Tech",
    description:"Tech-commerce promises best deals, best prices and best service" 
  };

  return (
    <div className='max-w-content mx-auto px-8'>
      <Hero image={HeroImg} details={details}/>
      <Featured/>
      <Services/>
    </div>
  )
}

export default Home;