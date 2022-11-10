import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "./reducers/FilterReducer";
import { LOAD_PRODUCTS } from "./actions";
import { Action } from "@remix-run/router";

const FilterContext=createContext();

const initialState= {
    all_products: [],
    filtered_products:[]
}


export const FilterProvider=({children})=> {

    const [state,dispatch]= useReducer(FilterReducer,initialState);
    const {products}= useProductContext();

    useEffect(()=> {
        dispatch({type:LOAD_PRODUCTS,payload:products})
    },[products])


    return (
        <FilterContext.Provider value={{...state}}>
            {children}
        </FilterContext.Provider>
    )
}


export const useFilterContext=()=> {
    return useContext(FilterContext);
}


