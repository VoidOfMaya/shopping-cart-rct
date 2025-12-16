import { useState, useEffect } from "react";
import { useOutletContext } from "react-router"
import style from './cart.module.css';

const Cart = () =>{
    const {cartItems }= useOutletContext();
    const [items, setItems]= useState(cartItems);

    const handleDisplay = () =>{
        if (items.length > 0){
            return items.map(item=><div>{item.name}</div>)
        }else{
            return<div>Cart is empty</div>
        }
 
    }
    //<div className={style.cartContainer}>{items.length > 0 && items.map(item=> <div>{item.name}</div>)}</div>    
    return(
         <div className={style.cartContainer}>{handleDisplay()}</div>    
    )
}
export {
    Cart,
}