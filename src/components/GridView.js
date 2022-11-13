import React from 'react'
import { NavLink } from 'react-router-dom'

const GridView = ({products}) => {

  if(products.length<=0) {
    return <h1>Sorry.. no products available..</h1>
  }

  return (
    <div className='grid grid-cols-6 gap-x-[10px]'>
       {products && products.map((item)=>{
        return(
            <div className='col-span-2 my-4' key={item.id}>
            <img src={item.Image[0].url} className="w-[150px] h-[100px]"/>
            <div>
                <p>{item.Name}</p>
                <p>{item.Company}</p>
                <p>{item.Price}</p>
                <NavLink to={`/products/${item.id}`}>See Product</NavLink>    
            </div>
            </div>
        )
       })}     
    </div>
  )
}

export default GridView