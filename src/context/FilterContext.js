import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "./reducers/FilterReducer";
import { LOAD_PRODUCTS, LIST_VIEW_ACTIVE, GRID_VIEW_ACTIVE } from "./actions";
import { Action } from "@remix-run/router";

const FilterContext=createContext();

const initialState= {
    all_products: [],
    filtered_products:[],
    list_view:false
}


export const FilterProvider=({children})=> {

    const [state,dispatch]= useReducer(FilterReducer,initialState);
    const {products}= useProductContext();

    useEffect(()=> {
        dispatch({type:LOAD_PRODUCTS,payload:products})
    },[products])

 const changeDisplayList=()=> {
    dispatch({type:LIST_VIEW_ACTIVE});
 }
 const changeDisplayGrid=()=>{
    dispatch({type:GRID_VIEW_ACTIVE});
 }   

    return (
        <FilterContext.Provider value={{...state,changeDisplayList,changeDisplayGrid}}>
            {children}
        </FilterContext.Provider>
    )
}


export const useFilterContext=()=> {
    return useContext(FilterContext);
}


