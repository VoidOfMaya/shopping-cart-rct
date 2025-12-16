import { useState, useEffect } from "react";
import { useOutletContext } from "react-router"

import style from './cart.module.css';

const Cart = () =>{
    const {cartItems }= useOutletContext();
    const [items, setItems]= useState(cartItems);

    const handleDisplay = () =>{
        if (items.length > 0){
            return items.map(item=><div>{item.name} - {item.price}$</div>)
        }else{
            return<div>Cart is empty</div>
        }
 
    }
    const totalCost = () =>{
        let amount = 0;
        items.forEach(item=>{
            amount = amount + item.price
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