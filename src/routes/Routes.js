import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import SingleProduct from '../pages/SingleProduct';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Error from '../pages/Error';


const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' index element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='products' element={<Products/>} />
            <Route path='checkout' element={<Checkout/>} />
            <Route path='cart' element={<Cart/>} />
            <Route path='products/:id' element={<SingleProduct/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
    </>
  )
}

export default AppRoutes;