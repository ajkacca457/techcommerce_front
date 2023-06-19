import React from 'react'
import Hero from '../components/Hero';
import Services from '../components/Services';
import Featured from '../components/Featured';

const Home = () => {
  return (
    <div className='max-w-content mx-auto'>
      <Hero/>
      <Featured/>
      <Services/>
    </div>
  )
}

export default Home;