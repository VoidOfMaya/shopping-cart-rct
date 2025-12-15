import { useEffect, useState } from "react";
import PropType from 'prop-types';
import style from './card.module.css';

const Card = ({id, photo, name, price, info, rating}) =>{
    const isInterested = (interest= false) =>{
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
             onMouseEnter={()=>isInterested(true)}
             onMouseLeave={()=>isInterested(false)}
             aria-label='card-element'>
            <img src={photo} alt={name + ' photo'} className={style.photo}></img>
            <div className={style.cardInfo}>
                <h3 className={style.name}>{name}</h3>
                <h2 className={style.price} aria-label='product price'>{price}$</h2>
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