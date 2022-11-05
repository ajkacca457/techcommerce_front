import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id }= useParams();
    console.log(useParams());
  return (
    <div>SingleProduct</div>
  )
}

export default SingleProduct