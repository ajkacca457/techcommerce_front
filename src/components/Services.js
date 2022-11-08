import React from 'react'
import {FcSupport,FcAutomotive,FcKey} from "react-icons/fc"
import ServiceCard from './ServiceCard'

const services=[
    {
        id:1,
        icon:<FcSupport size={50}/>,
        info:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip."
    },
    {
        id:2,
        icon:<FcAutomotive size={50}/>,
        info:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip."
    },
    {
        id:3,
        icon:<FcKey size={50}/>,
        info:"Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiuiana Smod Tempor Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip."
    }
]


const Services = () => {
  return (
    <div className='grid grid-cols-6 gap-x-4 my-8'>
        {services.map(item=> {
            return(
                <ServiceCard {...item} key={item.id}/>
            )
        })}
    </div>
  )
}

export default Services