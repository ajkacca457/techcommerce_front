import React from 'react'

const ServiceCard = ({icon,info}) => {
  return (
    <div className='col-span-2'>
        {icon}
        <p>{info}</p>
    </div>
  )
}

export default ServiceCard;