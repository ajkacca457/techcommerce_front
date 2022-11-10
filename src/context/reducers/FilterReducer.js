import { LOAD_PRODUCTS } from "../actions";

const FilterReducer=(state,action)=>{
    switch (action.type) {
        case LOAD_PRODUCTS:
        return {
            ...state,
            all_products:[...action.payload],
            filtered_products:[...action.payload]
        }
    }

}

export default FilterReducer;