import React from 'react'
import AppRoutes from '../routes/Routes'
import Navbar from './Navbar'

const Container = () => {
  return (
    <div>  
      <Navbar/>
      <AppRoutes/>
    </div>
  )
}

export default Container