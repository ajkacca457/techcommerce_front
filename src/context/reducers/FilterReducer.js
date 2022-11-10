import { LOAD_PRODUCTS, LIST_VIEW_ACTIVE, GRID_VIEW_ACTIVE } from "../actions";

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
    }

}

export default FilterReducer;