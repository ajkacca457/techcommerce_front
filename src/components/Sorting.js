import React from 'react'
import {BsFillGrid1X2Fill, BsListUl} from 'react-icons/bs';
import { useFilterContext } from '../context/FilterContext';

const Sorting = () => {
    const {changeDisplayList,changeDisplayGrid}=useFilterContext();

  return (
    <div className='bg-orange-300 grid grid-cols-6'>
        <div className='col-span-2 flex gap-x-[10px]'>
            <BsFillGrid1X2Fill size={25} onClick={changeDisplayGrid}/>
            <BsListUl size={25} onClick={changeDisplayList}/> 
        </div>
    </div>
  )
}

export default Sorting