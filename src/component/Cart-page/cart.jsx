import { useState } from "react";
import { useOutletContext } from "react-router"

const Cart = () =>{
    const {cartItems }= useOutletContext();
    const [items, setItems]= useState(cartItems);

    return(
         <div>You Cart is empty</div>    
    )
}
export {
    Cart,
}