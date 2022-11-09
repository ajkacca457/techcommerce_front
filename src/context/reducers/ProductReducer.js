import { GET_PRODUCTS_BEGINS,GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from "../actions";


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
        default:
            return {...state}
    }

}

export default ProductReducer;