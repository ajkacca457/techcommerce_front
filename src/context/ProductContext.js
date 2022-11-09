import axios from "axios";
import { useContext, useEffect, useReducer } from "react";
import {createContext} from "react";
import { GET_PRODUCTS_BEGINS,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_ERROR } from "./actions";
import ProductReducer from "./reducers/ProductReducer";


const ProductContext= createContext();

const roolUrl="https://techcommerce-api.netlify.app/api/products";

const initialState= {
    products: [],
    featured:[],
    loading: false,
    error: false
}

const ProductProvider=({children})=>{
    const [state,dispatch]= useReducer(ProductReducer,initialState);
    console.log(state);

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

useEffect(()=>{
    fetchProducts(roolUrl);
},[])


return(
<ProductContext.Provider value={{...state}}>
    {children}
</ProductContext.Provider>
)
}

const useProductContext=()=>{
    return useContext(ProductContext);
}

export {ProductProvider,useProductContext};