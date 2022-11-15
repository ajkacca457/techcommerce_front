import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import CartReducer from './reducers/CartReducer';
import { ADD_TO_CART,REMOVE_ITEM_FROM_CART,CALCULATE_TOTALS,CLEAR_CART } from './actions';
import { useNavigate } from 'react-router-dom';

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

    const addItemsToCart=(id,amount,productinfo)=> {
        dispatch({type:ADD_TO_CART,payload:{id,amount,productinfo}})
    }

    const removeItemFromCart=(itemid)=> {
        dispatch({type:REMOVE_ITEM_FROM_CART,payload:{itemid}})
    }

    const clearCart=()=> {
        dispatch({type:CLEAR_CART});
    }

    useEffect(()=> {
        dispatch({type:CALCULATE_TOTALS})
        localStorage.setItem("cart",JSON.stringify(state.cart_products))
    },[state.cart_products])

  return (
    <CartContext.Provider value={{...state,addItemsToCart,removeItemFromCart,clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

const useCartContext=()=> {
    return useContext(CartContext);
}

export { CartContextProvider, useCartContext }