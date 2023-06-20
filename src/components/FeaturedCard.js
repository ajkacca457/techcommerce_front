import React from 'react'
import { NavLink } from 'react-router-dom';

const FeaturedCard = ({id,Name,Price,Image}) => {
  return (
    <div className='col-span-2 flex flex-col justify-between items-center group'>
      <div className="h-[300px] bg-center bg-[length:50%] w-2/3 bg-no-repeat transition duration-300 group-hover:scale-125" style={{backgroundImage:`url(${Image[0].url})`}}></div>
        <div className='text-left'>
          <h3 className='uppercase text-sm font-semibold'>{Name}</h3>
          <p className='my-2 text-center'>{Price}$</p>
          <NavLink to={`/products/${id}`} className="bg-sky-700 uppercase px-3 py-2 block w-fit mx-auto text-white rounded transition duration-300 hover:bg-sky-800">See Product</NavLink>
        </div>
    </div>
  )
}

export default FeaturedCard