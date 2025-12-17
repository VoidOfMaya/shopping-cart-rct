import { useState, useEffect } from "react";
import { useOutletContext } from "react-router"
import { QuantityBtn } from "../quantity-btn/quantity";

import style from './cart.module.css';

const Cart = () =>{
    const {cartItems }= useOutletContext();
    const [items, setItems]= useState(cartItems);

    const handleQuantity =(newNumber)=>{
        setItems(newNumber)
    }

    const handleDisplay = () =>{
        if (items.length > 0){
            return items.map(item=><div key={item.id}>{item.name} - {item.price}$  <QuantityBtn handleQuantity={handleQuantity} quantity={item.quantity} cartMode={true} itemId={item.id}/></div>)
        }else{
            return<div>Cart is empty</div>
        }
 
    }
    const totalCost = () =>{
        let amount = 0;
        items.forEach(item=>{
            amount = amount + (item.price * item.quantity)
        })
        return amount
    } 
      
    return(
         <div className={style.cartContainer}>
            <div>{handleDisplay()}</div>
            <div className={style.totalCost}>total : {totalCost()}$</div>
         </div>
         
          
    )
}
export {
    Cart,
}