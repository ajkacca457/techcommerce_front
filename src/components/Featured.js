import React from 'react'
import { useProductContext } from '../context/ProductContext'
import FeaturedCard from './FeaturedCard';

const Featured = () => {
  const {featured,loading, error}= useProductContext();

  if(loading) {
    return(
      <div>Loading...</div>
    )
  }
  if(error) {
    return(
      <div>Products are not available...</div>
    )
  }
  return (
    <div className='grid grid-cols-6 gap-x-[10px]'>
        {featured.slice(0,3).map((item)=>{
          return <FeaturedCard key={item.id} {...item} className="col-span-2"/>
        })}
    </div>
  )
}

export default Featured