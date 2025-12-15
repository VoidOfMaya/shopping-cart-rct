import { useEffect, useState } from "react";
import PropType from 'prop-types';
import style from './card.module.css';

const Card = ({id, photo, name, price, info, rating}) =>{

    return(
        <div className={style.card}>
            <img src={photo} alt={name} className={style.photo}></img>
            <h3>{name}</h3>
            <h2>{price}$</h2>
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