import React from 'react'
import Filter from '../components/Filter'
import ListView from '../components/ListView'
import GridView from '../components/GridView'
import { useFilterContext } from '../context/FilterContext'

const Products = () => {
  const {filtered_products}= useFilterContext();
  return (
    <div className='grid grid-cols-5 gap-x-[10px]'>
      <Filter className="col-span-1"/>
      <div className='col-span-4 bg-red-400'>
        <ListView products={filtered_products}/>
        <GridView products={filtered_products}/>
      </div>
    </div>
  )
}

export default Products