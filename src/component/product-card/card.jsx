import { useEffect, useState } from "react";
import { QuantityBtn } from "../quantity-btn/quantity";
import PropType from 'prop-types';
import style from './card.module.css';

const Card = ({id, photo, name, price, info, rating}) =>{
    const [hover, setHover]= useState(false)
    const isInterested = (interest = false) =>{
        if(interest){
            console.log('entered card');
            return(
                <>
                    <button aria-label="Add to cart">add to cart</button>
                    <div>set number to add</div>
                </>
            )
        }
        else{
            console.log('exited card');
            return
        }
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
                    <QuantityBtn className={style.addQuantity} aria-label="Add to cart"/>
                    <button aria-label="Add to cart">add to cart</button>
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