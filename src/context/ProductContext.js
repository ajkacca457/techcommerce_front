import { useContext } from "react";
import {createContext} from "react";

const ProductContext= createContext();

const initialState= {
    name:"hello",
    addres:"121 downing street"
}

const ProductProvider=({children})=>{
return(
<ProductContext.Provider value={initialState}>
    {children}
</ProductContext.Provider>
)
}

const useProductContext=()=>{
    return useContext(ProductContext);
}

export {ProductProvider,useProductContext};