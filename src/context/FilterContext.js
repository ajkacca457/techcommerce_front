import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "./reducers/FilterReducer";
import { LOAD_PRODUCTS, LIST_VIEW_ACTIVE, GRID_VIEW_ACTIVE, UPDATE_SORT, FILTER_PRODUCTS } from "./actions";

const FilterContext=createContext();

const initialState= {
    all_products: [],
    filtered_products:[],
    list_view:false,
    sort:"price-lowest",
    filters:{
        searchtext:"",
        company:"all",
        category:"all",
        minPrice:0,
        maxPrice:0,
        price:0,
        freeshipping:false
    }
}


export const FilterProvider=({children})=> {

    const [state,dispatch]= useReducer(FilterReducer,initialState);
    const {products}= useProductContext();

    useEffect(()=> {
        dispatch({type:LOAD_PRODUCTS,payload:products})
    },[products])

    useEffect(()=>{
        dispatch({type:FILTER_PRODUCTS})
    },[products,state.sort])

 const changeDisplayList=()=> {
    dispatch({type:LIST_VIEW_ACTIVE});
 }
 const changeDisplayGrid=()=>{
    dispatch({type:GRID_VIEW_ACTIVE});
 }   

 const sortUpdate=(e)=>{
    dispatch({type:UPDATE_SORT,payload:e.target.value})
 }

    return (
        <FilterContext.Provider value={{...state,changeDisplayList,changeDisplayGrid,sortUpdate}}>
            {children}
        </FilterContext.Provider>
    )
}


export const useFilterContext=()=> {
    return useContext(FilterContext);
}


