import React from 'react'
import { useProductContext } from '../context/ProductContext'
import FeaturedCard from './FeaturedCard';
import Loading from './Loading';

const Featured = () => {
  const {featured,loading, error}= useProductContext();

  if(loading) {
    return(
      <Loading/>
    )
  }
  if(error) {
    return(
      <div>Products are not available...</div>
    )
  }
  return (
    <div className='grid grid-cols-6 gap-x-[10px] mt-20'>
      <div className='col-span-full'>
        <h1 className='rounded uppercase mb-12 text-left text-2xl border-b-2 pb-2'>Featured Techs</h1>
      </div>
      {featured.slice(0,3).map((item)=>{
        return <FeaturedCard key={item.id} {...item}/>
      })}
    </div>
  )
}

export default Featured