import React from 'react'

const GridView = ({products}) => {
  return (
    <div className='grid grid-cols-6 gap-x-[10px]'>
       {products && products.map((item)=>{
        return(
            <div className='col-span-2 my-4'>
            <img src={item.Image[0].url} className="w-[150px] h-[100px]"/>
            <div>
                <p>{item.Name}</p>
                <p>{item.Company}</p>    
            </div>
            </div>
        )
       })}     
    </div>
  )
}

export default GridView