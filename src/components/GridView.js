import React from 'react'
import FeaturedCard from './FeaturedCard'

const GridView = ({products}) => {

  if(products.length<=0) {
    return <h1 className='text-sm my-4 text-red-700'>No products available with these specifications..</h1>
  }

  return (
    <div className='grid grid-cols-6 gap-x-[10px] mb-8'>
       {products && products.map((item)=>{
        return(
          <FeaturedCard key={item.id} {...item}/>
        )
       })}     
    </div>
  )
}

export default GridView