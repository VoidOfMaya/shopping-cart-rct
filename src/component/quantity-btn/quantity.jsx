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
        <div className={styles.selector} 
             aria-label="Select item quantity"
             >
            <button className={styles.selectorBtn}
                    onClick={handleIncrement}
                    aria-label="Increase item quantity">+</button>

            <input type="number" 
                   value={quantity}     
                   className={styles.selectorInput}
                   aria-label="Item quantity"
                   onChange={onChangeHandler}></input>

            <button className={styles.selectorBtn}
                    onClick={handleDecremnt}
                    aria-label="Decrease item quantity">-</button>
        </div>
    )
}
export {
    QuantityBtn,
}