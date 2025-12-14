import { useState } from 'react'
import styles from './quantity.module.css'

const QuantityBtn = () =>{
    const [quantity, setQuantity]= useState(1)

    const onChangeHandler = (e) =>{
        setQuantity(Number(e.target.value));
    }
    const handleIncrement = () =>{
        setQuantity(prev =>{return prev + 1})
    }
    const handleDecremnt = () =>{
        setQuantity(prev =>{return prev - 1})
    }
    return(
        <div className={styles.selector}>
            <button className={styles.selectorBtn}
                    onClick={handleIncrement}>+</button>

            <input type="number" 
                   value={quantity}     
                   className={styles.selectorInput}
                   onChange={onChangeHandler}></input>

            <button className={styles.selectorBtn}
                    onClick={handleDecremnt}>-</button>
        </div>
    )
}
export {
    QuantityBtn,
}