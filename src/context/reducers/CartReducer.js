import { ADD_TO_CART } from "../actions";

const CartReducer = (state,action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const {id,amount,productinfo}=action.payload;
            let tempItem= state.cart_products.find(item=> item.productid===id);
            if(tempItem) {
                let tempCart=state.cart_products.map((item)=>{
                    if(item.productid===id) {
                        let newAmount=amount;
                        if(newAmount>=item.max){
                            newAmount=item.max
                        }
                        return {...item,amount:newAmount}
                    } else {
                        return item
                    }
                })
                return {...state,cart_products:tempCart}
            }
            else {
                const newItem= {
                    productid:id,
                    name:productinfo.Name,
                    amount,
                    image:productinfo.Image[0].url,
                    price:productinfo.Price,
                    max:productinfo.Stock
                }
             return {...state, cart_products:[...state.cart_products,newItem]}
            }
            return {...state}                
            break;
        
            default:
            break;
    }
}

export default CartReducer