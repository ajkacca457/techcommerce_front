import React from 'react'

const ServiceCard = ({icon,info}) => {
  return (
    <div className='col-span-full md:col-start-2 md:col-span-4 flex items-center gap-x-[1rem] my-4 
    rounded px-4 border-[1px] border-slate-300 bg-slate-200 transition duration-30 hover:bg-slate-400 group'>
        <div className='group-hover:animate-jump'>{icon}</div>
        <p className='text-left uppercase p-4'>{info}</p>
    </div>
  )
}

export default ServiceCard;