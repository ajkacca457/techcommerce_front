import React from 'react'
import { NavLink } from 'react-router-dom'

const ListView = ({products}) => {
  if(products.length<=0) {
    return <h1>Sorry.. no products available..</h1>
  }
  
  return (
    <div>
       {products && products.map((item)=>{
        return(
            <div className='flex my-4 gap-x-[10px]' key={item.id}>
            <img src={item.Image[0].url} className="w-[150px] h-[100px]"/>
            <div>
                <p>{item.Name}</p>
                <p>{item.Company}</p>
                <p>{item.Price}</p>
                <NavLink to={`/products/${item.id}`}>See More</NavLink>    
            </div>
            </div>
        )
       })}     
    </div>
  )
}

export default ListView