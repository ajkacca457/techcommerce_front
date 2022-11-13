import { LOAD_PRODUCTS, LIST_VIEW_ACTIVE, GRID_VIEW_ACTIVE, UPDATE_SORT, FILTER_PRODUCTS, UPDATE_STATE_FILTERS, SHOW_FILTERED_PRODUCTS, CLEAR_ALL_FILTER } from "../actions";

const FilterReducer=(state,action)=>{
    switch (action.type) {
        case LOAD_PRODUCTS:
        const maxPriceArr=action.payload.map(item=>item.Price);
        const max_Price=Math.max(...maxPriceArr);
        return {
            ...state,
            all_products:[...action.payload],
            filtered_products:[...action.payload],
            filters:{...state.filters,
                maxPrice:max_Price,
                price:max_Price}
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
        case UPDATE_STATE_FILTERS:
            const {name,value}= action.payload;
            return {
                ...state,
                filters: {...state.filters, [name]:value}
            }
        case SHOW_FILTERED_PRODUCTS:
            const {all_products,filters:{searchtext,category,company,freeshipping,price}}= state;
            let tempProducts=[...all_products];
            if (searchtext) {
                tempProducts=tempProducts.filter((item)=>item.Name.toLowerCase().startsWith(searchtext))
            }
            if(category!=="all") {
                tempProducts=tempProducts.filter((item)=>item.Category===category)
            }
            if(company!=="all") {
                tempProducts=tempProducts.filter((item)=>item.Company===company)
            }
            if(freeshipping) {
                tempProducts=tempProducts.filter((item)=>item.FreeShipping===freeshipping)
            }
            if(price) {
                tempProducts=tempProducts.filter((item)=>item.Price<=price)
            }

            return {
                ...state,
                filtered_products:tempProducts
            }
        case CLEAR_ALL_FILTER:
            return {
                ...state,
                filters:{
                    ...state.filters,
                    searchtext:"",
                    company:"all",
                    category:"all",
                    price:state.filters.maxPrice,
                    freeshipping:false
                }
            }
    }

}

export default FilterReducer;