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
            <div className='grid grid-cols-3 gap-x-[10px] border-[1px] border-slate-300 my-8 p-4 items-center group' key={item.id}>
              <img src={item.Image[0].url} className="w-[150px] max-h-[100px] col-span-1 justify-self-center transition duration-300 group-hover:scale-125"/>
              <div className='text-left col-span-1 text-sm'>
                <p>{item.Name}</p>
                <p>{item.Company}</p>
                <p>{item.Price}</p>
              </div>
              <div className='col-span-1 justify-self-end'>
                <NavLink to={`/products/${item.id}`} className="bg-sky-700 uppercase px-2 py-1 block w-fit my-4 text-white text-sm rounded transition duration-300 hover:bg-sky-800">See Product</NavLink>    
              </div>
            </div>
        )
       })}     
    </div>
  )
}

export default ListView