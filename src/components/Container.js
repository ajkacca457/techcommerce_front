import React from 'react'
import AppRoutes from '../routes/Routes'
import Navbar from './Navbar'

const Container = () => {
  return (
    <div className="max-w-content mx-auto">  
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default Container