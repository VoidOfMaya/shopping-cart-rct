import style from './store.module.css';
import { Card } from '../product-card/card';
import { useEffect, useState } from 'react';
import { Loading } from '../loading/load';

const Store = () =>{
    
    const [products, setProducts] = useState(null);
    const [loading, setLoading]= useState(true); 

    const handleCards= (items) =>{
        return items.map(item =>(
            
            <Card  
            key={item.id} 
            id={item.id}
            photo={item.image} 
            name={item.title} 
            price={item.price} 
            info={item.description} 
            rating={item.rating}
            className={style.card}

            />
            
            
        ))
 
    }
    const LoadingSpinner = () => <Loading/>

    useEffect(()=>{


        fetch('https://fakestoreapi.com/products')
        .then(response=>{
            if(response.status >= 400) {
                throw new Error('A server error has occured error code: ' + response.status )
            }
            return response.json();
        })
        .then( data =>{
            setProducts(data)
        })
        .catch(error => console.error(error))
        .finally(()=> {setLoading(false)});


    },[])
    if(loading){
        return <LoadingSpinner />
    }
    return(
        <section className={style.pageContainer}>
            <div className={style.storePage} >

                <div className={style.title}>Store Page:</div>
                <div className={style.cardContainer}>
                    {products && handleCards(products)} 
                </div>
            </div>
        </section>
    )
}
export {
    Store,
}