import React from 'react'
import {GiMoneyStack,GiZeppelin,GiWeightLiftingUp} from "react-icons/gi"
import ServiceCard from './ServiceCard'

const services=[
    {
        id:1,
        icon:<GiMoneyStack size={50}/>,
        info:"We have 10 days refund policy. If you dont think the gadget is not for you, you can return within 10 days and get your money back."
    },
    {
        id:2,
        icon:<GiZeppelin size={50}/>,
        info:"Super fast delivery with reasonable shipping cost. You can get your gadget by post, budbee or any other medium you choose."
    },
    {
        id:3,
        icon:<GiWeightLiftingUp size={50}/>,
        info:"All of our gadgets are durable and thoroughly tested. We ensure the best quality for our clients."
    }
]


const Services = () => {
  return (
    <div className='grid grid-cols-6 gap-x-4 my-20'>
        <div className='col-span-full'>
            <h1 className='w-fit mx-auto py-1 px-2 rounded uppercase text-sm bg-slate-600 text-white mb-12'>Services</h1>
        </div>
        {services.map(item=> {
            return(
                <ServiceCard {...item} key={item.id}/>
            )
        })}
    </div>
  )
}

export default Services