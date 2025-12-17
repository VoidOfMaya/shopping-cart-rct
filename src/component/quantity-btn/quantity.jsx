import PropType from 'prop-types';
import styles from './quantity.module.css'

const QuantityBtn = ({handleQuantity, quantity, cartMode = false , itemId}) =>{
    //const [quantity, setQuantity]= useState(1)

    const onChangeHandler = (e) =>{
        //setQuantity(Number(e.target.value));
        const input = Number(e.target.value);
        //handleQuantity(input) 
        console.log(input)
    };
    //in store page
    const handleIncrement = () =>{

        handleQuantity(prev =>{
            if(prev < 20){
                return prev + 1
            }
            return prev 
        })
    };
    const handleDecremnt = () =>{

        handleQuantity(prev =>{
            if(prev > 1){
                return prev - 1
            }
            return prev
        })
    };
    //in cart page
    const cartIncrementHandlr = () =>{
        handleQuantity(prev=>{
            return prev.map(item => item.id === itemId?({...item, quantity: quantity < 20? quantity + 1: quantity}):item)})

    };
    const cartDecrementHandlr = () =>{
        handleQuantity(prev=>{
            return prev.map(item => item.id === itemId?({...item, quantity: quantity > 1? quantity - 1: quantity}):item)})
    };
    return(
        <div className={styles.selector} 
             aria-label="Select item quantity"
             >
            <button className={styles.selectorBtn}
                    onClick={()=>{ !cartMode? handleIncrement(): cartIncrementHandlr()}}
                    aria-label="Increase item quantity">+</button>

            <input type="number" 
                   value={quantity}   
                   className={styles.selectorInput}
                   aria-label="Item quantity"
                   onChange={onChangeHandler}
                   ></input>

            <button className={styles.selectorBtn}
                    onClick={()=>{ !cartMode? handleDecremnt(): cartDecrementHandlr()}}
                    aria-label="Decrease item quantity">-</button>
        </div>
    )
}
QuantityBtn.PropTyps ={
    quantity: PropType.Number,
    handleQuantity: PropType.func,
    cartMode: PropType.bool,
}
export {
    QuantityBtn,
}