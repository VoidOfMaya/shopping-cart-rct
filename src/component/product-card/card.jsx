import { useEffect, useState } from "react";
import { QuantityBtn } from "../quantity-btn/quantity";
import PropType from 'prop-types';
import style from './card.module.css';

const Card = ({id, photo, name, price, info, rating}) =>{
    const [hover, setHover]= useState(false)
    //handles quantity state for quantitybtn
    const [quantity, setQuantity]= useState(1)
    //takes item id, title, price, quantity{set by Quantitybtn}
    const [ itemToAdd, setItemToAdd]= useState(null);

    const handleQuantity =(number)=>{
        setQuantity(number)
    }
    const handleAddItem =()=>{
        setItemToAdd({id, photo, name, price, quantity})
    }

    return(
        <div className={style.card}
             onMouseEnter={()=>setHover(true)}
             onMouseLeave={()=>setHover(false)}
             aria-label='card-element'>
            <img src={photo} alt={name + ' photo'} className={style.photo}></img>
            <div className={style.cardInfo}>
                <h3 className={style.name}>{name}</h3>
                <h2 className={style.price} aria-label='product price'>{price}$</h2>
            </div>
            {hover &&(
                <div className={style.addToCart}>
                    <QuantityBtn handleQuantity={handleQuantity} quantity={quantity} className={style.addQuantity} aria-label="Add to cart"/>
                    <button 
                    aria-label="Add to cart"
                    onClick={handleAddItem}
                    >add to cart</button>
                </div>
            )}
        </div>
    )
}
Card.prototype ={
    name:  PropType.string,
    price: PropType.number,
    photo: PropType.string,
    info:  PropType.string,
    rating:PropType.object
}

export{
    Card
}