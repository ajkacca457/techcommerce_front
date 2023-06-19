import React from 'react'
import Hero from '../components/Hero';
import Services from '../components/Services';
import Featured from '../components/Featured';
import HeroImg from "../images/hero1.jpg"


const Home = () => {
  return (
    <div className='max-w-content mx-auto'>
      <Hero image={HeroImg}/>
      <Featured/>
      <Services/>
    </div>
  )
}

export default Home;