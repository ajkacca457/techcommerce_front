import React from 'react'
import { NavLink } from 'react-router-dom';

const FeaturedCard = ({id,Name,Price,Image}) => {
  return (
    <div className='col-span-full md:col-span-2 my-8 md:my-0 flex flex-col justify-between items-center group'>
      <div className="h-[150px] md:h-[250px] bg-center bg-[length:35%] md:bg-[length:50%] w-2/3 bg-no-repeat transition duration-300 group-hover:scale-125" style={{backgroundImage:`url(${Image[0].url})`}}></div>
        <div className='text-left'>
          <h3 className='uppercase text-sm font-semibold mt-6 md:mt-0 w-3/4 mx-auto text-center'>{Name}</h3>
          <p className='my-2 text-center'>{Price}$</p>
          <NavLink to={`/products/${id}`} className="bg-sky-700 uppercase px-2 py-1 block w-fit mx-auto text-white text-sm rounded transition duration-300 hover:bg-sky-800">See Product</NavLink>
        </div>
    </div>
  )
}

export default FeaturedCard