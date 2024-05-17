import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{
    const [CartItems, setCartItems] = useState({});
    const addToCart =(valid)=>{
        if(!CartItems[valid]){
            setCartItems((prev)=>({...prev,[valid]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[valid]:prev[valid]+1}))
        }
    }
    const removeFromCart =(valid)=>{
        setCartItems((prev)=>({...prev,[valid]:prev[valid]-1}))
    }

    useEffect(()=>{
    },[CartItems])
    const contextValue ={
        food_list,
        CartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider