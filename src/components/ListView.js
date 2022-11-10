import React from 'react'

const ListView = ({products}) => {
  return (
    <div>
       {products && products.map((item)=>{
        return(
            <div className='flex my-4 gap-x-[10px]' key={item.id}>
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

export default ListView