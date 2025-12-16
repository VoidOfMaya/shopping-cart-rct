import PropType from 'prop-types';
import styles from './quantity.module.css'

const QuantityBtn = ({handleQuantity, quantity}) =>{
    //const [quantity, setQuantity]= useState(1)

    const onChangeHandler = (e) =>{
        //setQuantity(Number(e.target.value));
        const input = Number(e.target.value);
        handleQuantity(input) 
    }
    const handleIncrement = () =>{

        handleQuantity(prev =>{
            if(prev < 20){
                return prev + 1
            }
            return prev 
        })
    }
    const handleDecremnt = () =>{

        handleQuantity(prev =>{
            if(prev > 1){
                return prev - 1
            }
            return prev
        })
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
                   ></input>

            <button className={styles.selectorBtn}
                    onClick={handleDecremnt}
                    aria-label="Decrease item quantity">-</button>
        </div>
    )
}
QuantityBtn.PropTyps ={
    quantity: PropType.Number,
    handleQuantity: PropType.func,
}
export {
    QuantityBtn,
}