import React from 'react'
import {BsFillGrid1X2Fill} from 'react-icons/bs';
import {GoListUnordered} from 'react-icons/go';
import { useFilterContext } from '../context/FilterContext';

const Sorting = () => {
    const {filtered_products,changeDisplayList,changeDisplayGrid,sort,sortUpdate, list_view}=useFilterContext();
  return (
    <div className='grid grid-cols-6 mt-8 bg-slate-400  py-2 px-4 rounded'>
        <div className='col-span-3 md:col-span-2 flex gap-x-[10px] items-center'>
            <BsFillGrid1X2Fill size={20} onClick={changeDisplayGrid} className={!list_view?`text-white border-[1px]`: `text-black border-[1px] border-black`} />
            <GoListUnordered size={20} onClick={changeDisplayList} className={list_view?`text-white border-[1px]`: `text-black border-[1px] border-black`}/> 
        </div>
        <div className='col-span-3 md:col-span-2 uppercase text-xs justify-self-end md:text-sm'>
          {filtered_products.length} products found
        </div>
        <form className='col-span-full mt-4 md:mt-0 md:col-span-2'>
          <select name="sort" id="sort" value={sort} onChange={sortUpdate} className='w-full rounded'>
            <option value="price-lowest">price-lowest</option>
            <option value="price-highest">price-highest</option>
            <option value="name-a">name(a-z)</option>
            <option value="name-z">name(z-a)</option>
          </select>
        </form>

    </div>
  )
}

export default Sorting