import React from 'react'
import Filter from '../components/Filter'
import ListView from '../components/ListView'
import GridView from '../components/GridView'
import { useFilterContext } from '../context/FilterContext'
import Sorting from '../components/Sorting'
import { useProductContext } from '../context/ProductContext'
import Loading from '../components/Loading';

const Products = () => {
  const {loading}= useProductContext();
  const {filtered_products, list_view}= useFilterContext();
  
  if(loading) {
    return(<Loading/>)
  }

  return (
    <div className='grid grid-cols-5 gap-x-8 max-w-content mx-auto px-8'>
      <Filter/>
      <div className='col-span-full md:col-span-4'>
        <Sorting/>
        {list_view ? <ListView products={filtered_products}/>: <GridView products={filtered_products}/>}
      </div>
    </div>
  )
}

export default Products