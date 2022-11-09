import { 
    GET_PRODUCTS_BEGINS,
    GET_PRODUCTS_SUCCESS, 
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT_BEGINS,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR} from "../actions";


const ProductReducer=(state,action)=> {
    switch (action.type) {
        case GET_PRODUCTS_BEGINS:
            return {...state,loading:true};
        case GET_PRODUCTS_SUCCESS:
            const featureProducts= action.payload.filter(item=> item.Featured===true);
            return {
                ...state,
                loading:false,
                products:action.payload,
                featured:featureProducts
            };
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                error:true
            }
        case GET_SINGLE_PRODUCT_BEGINS:
            return  {...state, single_loading:true};
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                single_loading:false,
                single_product:action.payload
            }
        case GET_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
                single_error:true
            }
        default:
            return {...state}
    }

}

export default ProductReducer;