import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import { QuantityBtn } from "../quantity-btn/quantity";
import PropType from 'prop-types';
import style from './card.module.css';

const Card = ({id, photo, name, price}) =>{


    const [quantity, setQuantity]= useState(1) 
    //cartcontext
    const { addItemToCart} = useOutletContext();

    const handleQuantity =(number)=>{
        setQuantity(number)
    }
    const handleAddItem =(item)=>{

        addItemToCart(item)
    }

    return(
        <div className={style.card}
             aria-label='card-element'>
            <h2 className={style.price} aria-label='product price'>{price}$</h2>
            <img src={photo} alt={name + ' photo'} className={style.photo}></img>
            <div className={style.cardInfo}>
                <h3 className={style.name}>{name}</h3>
                
            </div>
                <div className={style.addToCart}>
                    <QuantityBtn 
                    handleQuantity={handleQuantity} 
                    quantity={quantity} 
                    className={style.addQuantity} 
                    aria-label="choose quantity"/>
                    <button 
                    onClick={
                        ()=>handleAddItem({id, photo,name,price, quantity})
                    }
                    className={style.submitBtn}
                    >add to cart</button>
                </div>
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