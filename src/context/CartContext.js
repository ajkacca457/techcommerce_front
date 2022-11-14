import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import CartReducer from './reducers/CartReducer';
import { ADD_TO_CART } from './actions';

const CartContext=createContext();

const getCartFromStorage=()=> {
    let cart=localStorage.getItem("cart"); 
    if(cart) {
        return JSON.parse(cart);
    } else {
        return []
    }
}

const initialState= {
    cart_products:getCartFromStorage(),
    total_items:0,
    total_amount:0,
    shipping_cost:0
}

const CartContextProvider = ({children}) => {

    const [state,dispatch]= useReducer(CartReducer,initialState);

    const addItemsToCard=(id,amount,productinfo)=> {
        dispatch({type:ADD_TO_CART,payload:{id,amount,productinfo}})
    }

    useEffect(()=> {
        localStorage.setItem("cart",JSON.stringify(state.cart_products))
    },[state.cart_products])

  return (
    <CartContext.Provider value={{...state,addItemsToCard}}>
        {children}
    </CartContext.Provider>
  )
}

const useCartContext=()=> {
    return useContext(CartContext);
}

export { CartContextProvider, useCartContext }