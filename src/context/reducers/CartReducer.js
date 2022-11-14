import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, CALCULATE_TOTALS } from "../actions";

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
            
            case REMOVE_ITEM_FROM_CART:
            const {itemid}=action.payload;
            let tempCart= state.cart_products.filter(item=> item.productid!==itemid)    
            return {...state, cart_products:tempCart};

            case CALCULATE_TOTALS:
            // const {total_items,total_amount}= state.cart_products.reduce((total,item)=>{
            //     const {amount,price}=item;
            //     total.total_items += amount;
            //     total.total_amount += amount*price;
            //     return total;
            // },
            // {
            //     total_items:0,
            //     total_amount:0    
            // })
            let allItems= state.cart_products.reduce((total,item)=> {
                return total+=item.amount
            },0)

            let grandTotal= state.cart_products.reduce((total,item)=>{
                return total+= item.amount*item.price
            },0)

            return {...state, total_items:allItems, total_amount:grandTotal}

            default:
            break;
    }
}

export default CartReducer