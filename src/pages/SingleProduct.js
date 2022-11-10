import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "../components/Loading"
import {useProductContext} from "../context/ProductContext";
import  {BaseURL} from "../utils/utils";

const SingleProduct = () => {
    
  const {id }= useParams();
    
    useEffect(()=>{
      fetchSingleProduct(`${BaseURL}/api/products?id=${id}`);
    },[id])

    const { fetchSingleProduct, single_product, single_loading, single_error }= useProductContext();
    console.log(single_product,single_loading,single_error);
    const {createdTime,fields,id:ProductId}= single_product;
    
    if(single_loading) {
      return(<Loading/>)
    }
    if(single_error) {
      return (<div>There is no product with this id</div>)
    }
    if(fields) {
      const {Category,Company,Description,Featured,FreeShipping,Image,Name,Price,Rating,Stock}=fields;
    return (
    <div>
      {Image.map((item,index)=> {
        return(<img src={item.url} key={index}  className="w-[150px] h-[100px]"/>)
      })}
      <h3>{Name}</h3>
      <p>{Description}</p>
      <p>{Category}</p>
      <p>{Company}</p>
      <p>{Featured && "Featured Product"}</p>
      <p>{FreeShipping && "Free Shipping Available"}</p>
      <p>{Price}</p>
      <p>{Rating}</p>
      <p>{Stock>0 ? `${Stock} Available`:"Not Available"}</p> 
    </div>
  )
}
}

export default SingleProduct