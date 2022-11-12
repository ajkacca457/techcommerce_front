import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import { getUniqueValues } from '../utils/utils';

const Filter = () => {
  const {all_products, filters: { category,company,freeshipping,maxPrice,minPrice,price,searchtext}, updateFilters}= useFilterContext();
  const categories= getUniqueValues(all_products,"Category");
  const companies= getUniqueValues(all_products,"Company");

  return (
    <>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div className="form-group my-4">
          <label htmlFor="searchtext">Search Products</label>
          <input type="text" name="searchtext" className='border-2 border-slate-300' value={searchtext} onChange={updateFilters}/>
        </div>

        <div className="form-group my-4">
          <label htmlFor="company">Select Company</label>
          <select name="company" id="company" className='w-full border-2 border-slate-300' value={company} onChange={updateFilters}>
            {companies && companies.map((item,index)=>{
              return(<option value={item} key={index}>{item}</option>)
            })}
          </select>
        </div>

        <div className="form-group my-4">
          <label htmlFor="category">Select Category</label>
          <select name="category" id="category" className='w-full border-2 border-slate-300' value={category} onChange={updateFilters}>
            {categories && categories.map((item,index)=>{
              return(<option value={item} key={index}>{item}</option>)
            })}
          </select>
        </div>
        
      </form>

    </>

  )
}

export default Filter