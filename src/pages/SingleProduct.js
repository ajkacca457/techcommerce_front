import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../components/Loading"
import {useProductContext} from "../context/ProductContext";
import  {BaseURL} from "../utils/utils";
import AddToCart from '../components/AddToCart';
import RatingView from '../components/RatingView';

const SingleProduct = () => {
    
  const {id }= useParams();
    
    useEffect(()=>{
      fetchSingleProduct(`${BaseURL}/api/products?id=${id}`);
    },[id])

    const { fetchSingleProduct, single_product, single_loading, single_error }= useProductContext();
    const {fields,id:productid}= single_product;
    
    if(single_loading) {
      return(<Loading/>)
    }
    if(single_error) {
      return (<div>There is no product with this id</div>)
    }
    if(fields) {
      const {Category,Company,Description,Featured,FreeShipping,Image,Name,Price,Rating,Stock}=fields;
    return (
    <div className='min-h-[80vh] flex flex-col justify-center px-8 my-10'>
    <div className='grid grid-cols-2 gap-x-4 max-w-content mx-auto place-items-center'>
      <div className='col-span-full md:col-span-1'>
        {Image.map((item,index)=> {
          return(<img src={item.url} key={index} className='w-1/2 mx-auto mb-6' alt={Name}/>)
        })}
      </div>
      <div className='col-span-full md:col-span-1'>
        <h3 className='text-xl font-semibold border-b-[1px] pb-2'>{Name}</h3>
        <p className='text-sm my-6 border-b-[1px] pb-6'>{Description}</p>
        <p className='text-sm my-2'>Gadget type: <span className='bg-slate-500 px-2 py-1 text-white rounded'>{Category}</span></p>
        <p className='text-sm my-2'>Producer: {Company}</p>
        <p className='text-sm my-2'>{Featured && "Featured Product"}</p>
        <p className='text-sm my-2'>{FreeShipping && "Free Shipping Available"}</p>
        <p className='text-xl my-2'>{Price}€</p>
        <RatingView rating={Rating}/>
        <div>{Stock>0 ? <AddToCart item={{Stock,productid,fields}}/>:"No Available stock"}</div> 
      </div>
    </div>
    </div>
  )
}
}

export default SingleProduct