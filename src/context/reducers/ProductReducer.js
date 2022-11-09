import { GET_PRODUCTS_BEGINS,GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR } from "../actions";


const ProductReducer=(state,action)=> {
    switch (action.type) {
        case GET_PRODUCTS_BEGINS:
            return {...state,loading:true};
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading:false,
                products:action.payload
            };
    }

}

export default ProductReducer;