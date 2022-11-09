import React from 'react'
import { NavLink } from 'react-router-dom';

const FeaturedCard = ({id,Name,Price,Image}) => {
  return (
    <div className='col-span-2'>
        <img src={Image[0].url} alt={Name} className='w-[150px] h-[100px]' />
        <h3>{Name}</h3>
        <p>{Price}</p>
        <NavLink to={`products/${id}`}>See More</NavLink>
    </div>
  )
}

export default FeaturedCard