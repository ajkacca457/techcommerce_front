import React from 'react'
import AppRoutes from '../routes/Routes'
import Navbar from './Navbar'

const Container = () => {
  return (
    <div class="max-w-content mx-auto">  
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default Container