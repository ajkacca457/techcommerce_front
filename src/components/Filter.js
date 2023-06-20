import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import { getUniqueValues } from '../utils/utils';

const Filter = () => {
  const {all_products, filters: { category,company,freeshipping,maxPrice,minPrice,price,searchtext}, updateFilters, clearFilter}= useFilterContext();
  const categories= getUniqueValues(all_products,"Category");
  const companies= getUniqueValues(all_products,"Company");

  return (
    <>
      <form onSubmit={(e)=> e.preventDefault()} className='mt-8'>
        <div className="form-group mb-4">
          <label htmlFor="searchtext" className='text-sm'>Search Products</label>
          <input type="text" name="searchtext" className='border-[1px] rounded border-slate-300 w-full px-2' value={searchtext} onChange={updateFilters}/>
        </div>

        <div className="form-group my-4">
          <label htmlFor="company" className='text-sm'>Select Company</label>
          <select name="company" id="company" className='w-full border-[1px] rounded border-slate-300 px-2' value={company} onChange={updateFilters}>
            {companies && companies.map((item,index)=>{
              return(<option value={item} key={index}>{item}</option>)
            })}
          </select>
        </div>

        <div className="form-group my-4">
          <label htmlFor="category" className='text-sm'>Select Category</label>
          <select name="category" id="category" className='w-full border-[1px] rounded border-slate-300 px-2' value={category} onChange={updateFilters}>
            {categories && categories.map((item,index)=>{
              return(<option value={item} key={index}>{item}</option>)
            })}
          </select>
        </div>

        <div className="form-group my-4">
          <label htmlFor="price" className='text-sm'>Current price ${price}</label>
          <input type="range" name="price" value={price} min={minPrice} max={maxPrice} onChange={updateFilters} />
        </div>

        <div className="form-group my-4 flex justify-center items-center gap-x-4">
          <label htmlFor="freeshipping" className='text-sm'>Shipping</label>
          <input type="checkbox" name="freeshipping" checked={freeshipping} onChange={updateFilters} />
        </div>

        <button className='bg-red-500 px-2 py-1 text-white transition duration-300 hover:bg-red-600 rounded' onClick={clearFilter}>Clear Filters</button>


      </form>

    </>

  )
}

export default Filter