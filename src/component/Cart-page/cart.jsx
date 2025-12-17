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
    const handleDelet = () =>{
        console.log(items)
    }

    const handleDisplay = () =>{
        if (items.length > 0){
            return items.map(item=>{
                return(
                    <div className={style.cartItem} key={item.id}>
                        <img src={item.photo} style={{height: "100px", objectFit: "contain",}}/>
                        <QuantityBtn handleQuantity={handleQuantity} 
                                     quantity={item.quantity} 
                                     cartMode={true} 
                                     itemId={item.id}/>
                        <div className={style.priceTag}>{item.price}$</div>
                        <button className={style.deletItem}
                                onClick={handleDelet}>Delet item</button>
                    </div>
                )
            })
        }else{
            return  <div style={ 
                        {textAlign: "center",
                        fontSize: "larger",
                        color:"#939394ff",
                    }}>Cart is empty</div>
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
            <div className={style.listContainer}>
                {handleDisplay()}
                <div className={style.totalCost}>total : {totalCost()}$</div>    
            </div>
            
         </div>
         
          
    )
}
export {
    Cart,
}