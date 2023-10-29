import { createContext } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopeContext = createContext()



const ShopContextProvider = ({children})=>{

    return(
        <ShopeContext.Provider value={{all_product}}>
            {children}
        </ShopeContext.Provider>
    )
}

export default ShopContextProvider;