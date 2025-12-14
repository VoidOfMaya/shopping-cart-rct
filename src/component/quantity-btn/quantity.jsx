import { useState } from 'react'
import styles from './quantity.module.css'
const QuantityBtn = () =>{
    const [quantity, setQuantity]= useState(1)
    return(
        <div className={styles.selector}>
            <button className={styles.selectorBtn}
                    onClick={()=>setQuantity(prev =>{return prev + 1})}>+</button>

            <input type="number" 
                   placeholder={quantity}      
                   className={styles.selectorInput}></input>

            <button className={styles.selectorBtn}
                    onClick={()=>setQuantity(prev =>{return prev + 1})}>-</button>
        </div>
    )
}
export {
    QuantityBtn,
}