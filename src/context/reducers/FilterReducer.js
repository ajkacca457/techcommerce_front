import { LOAD_PRODUCTS, LIST_VIEW_ACTIVE, GRID_VIEW_ACTIVE, UPDATE_SORT, FILTER_PRODUCTS } from "../actions";

const FilterReducer=(state,action)=>{
    switch (action.type) {
        case LOAD_PRODUCTS:
        return {
            ...state,
            all_products:[...action.payload],
            filtered_products:[...action.payload]
        }
        case LIST_VIEW_ACTIVE:
            return {
                ...state,
                list_view:true
            }
        case GRID_VIEW_ACTIVE:
            return {
                ...state,
                list_view:false
            }
        case UPDATE_SORT:
            console.log(action.payload);
            return {
                ...state, sort:action.payload
            }
        case FILTER_PRODUCTS:
            const {filtered_products,sort}=state;
            let sorted_products=[...filtered_products];
            switch (sort) {
                case "price-lowest":
                sorted_products=sorted_products.sort((a,b)=>{
                   return a.Price-b.Price
                })
                break;
                
                case "price-highest":
                sorted_products=sorted_products.sort((a,b)=>{
                    return b.Price-a.Price
                })
                break;
                
                case "name-a":
                sorted_products=sorted_products.sort((a,b)=>{
                    return a.Name.localeCompare(b.Name)
                })
                break;
                case "name-z":
                sorted_products=sorted_products.sort((a,b)=>{
                    return b.Name.localeCompare(a.Name)
                })
                break;
            }
            return{
                ...state,filtered_products:sorted_products
            }
    }

}

export default FilterReducer;