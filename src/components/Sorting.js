import React from 'react'
import {BsFillGrid1X2Fill, BsListUl} from 'react-icons/bs';
import { useFilterContext } from '../context/FilterContext';

const Sorting = () => {
    const {filtered_products,changeDisplayList,changeDisplayGrid}=useFilterContext();

  return (
    <div className='bg-orange-300 grid grid-cols-6'>
        <div className='col-span-2 flex gap-x-[10px]'>
            <BsFillGrid1X2Fill size={25} onClick={changeDisplayGrid}/>
            <BsListUl size={25} onClick={changeDisplayList}/> 
        </div>
        <div className='col-span-2'>
          {filtered_products.length} products found
        </div>
        <form className='col-span-2'>
          <select name="sort" id="sort">
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