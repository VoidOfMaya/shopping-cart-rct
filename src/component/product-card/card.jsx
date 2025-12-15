import { useEffect, useState } from "react"
import style from './card.module.css';

const Card = () =>{
    const [item, setItem] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading]= useState(true); 

    useEffect(()=>{
        const controller = new AbortController();
        fetch('https://fakestoreapi.com/products/1')
            .then(response =>{
                if(response.status >= 400){
                    throw new Error('server error');
                }
                return response.json();
            })
            .then(data => {
                console.log(data)
                setItem(data)
            })
            .catch(error => setError(error))  
            .finally(()=> setLoading(false));
            return ()=> controller.abort();  
    },[])
    return(
        <div className={style.card}>
            <img src={item.image} 
            alt={item.title}
            className={style.photo}></img>
            <h3>{item.title}</h3>
            <h4>{item.price}$</h4>
            <p>{item.description}</p>
    
        </div>
    )
}
export{
    Card
}