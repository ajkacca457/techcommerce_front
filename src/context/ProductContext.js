import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import {createContext} from "react";
import { BaseURL } from "../utils/utils";
import { 
    GET_PRODUCTS_BEGINS,
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGINS,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR } from "./actions";
import ProductReducer from "./reducers/ProductReducer";


const ProductContext= createContext();

const initialState= {
    products: [],
    featured:[],
    loading: false,
    error: false,
    single_loading:false,
    single_error:false,
    single_product:{}
}

const ProductProvider=({children})=>{

    const [state,dispatch]= useReducer(ProductReducer,initialState);

    const fetchProducts= async (url)=>{
        dispatch({type:GET_PRODUCTS_BEGINS});
        try {
            const response= await axios.get(url);
            const results= response.data;
            dispatch({type:GET_PRODUCTS_SUCCESS,payload:results})
        } catch (error) {
            dispatch({type:GET_PRODUCTS_ERROR})
        }
    } 
    
    const fetchSingleProduct=async(url)=>{
        dispatch({type:GET_SINGLE_PRODUCT_BEGINS});
        try {
         const response=await axios.get(url);
         const result= response.data;
         dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:result})   
        } catch (error) {
          dispatch({type:GET_SINGLE_PRODUCT_ERROR})  
        }
    }

useEffect(()=>{
    fetchProducts(`${BaseURL}/api/products`);
},[])


return(
<ProductContext.Provider value={{...state, fetchSingleProduct}}>
    {children}
</ProductContext.Provider>
)
}

const useProductContext=()=>{
    return useContext(ProductContext);
}

export {ProductProvider,useProductContext};