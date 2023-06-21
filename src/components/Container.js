import React from 'react'
import AppRoutes from '../routes/Routes'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const Container = () => {
  return (
    <div>  
      <Navbar/>
      <MobileNav/>
      <AppRoutes/>
    </div>
  )
}

export default Container