import './component/styles/global.css'
import { TopNav } from './component/nav-bar/top-nav'
import { Outlet } from 'react-router'
import { useState } from 'react'
import { Footer } from './component/footer/footer'

const App = () =>{
    const [cartItems, setCartItems]= useState([])

    const countItems=()=>{
        return cartItems.reduce((sum,item)=> sum + item.quantity, 0);
    }
    const addItemToCart = (newItem) =>{
        setCartItems(prev=>{
            const exists = prev.find(item => item.id === newItem.id);

            if(exists){
                return prev.map(item=>
                        item.id === newItem.id
                        ? {...item, quantity: item.quantity + newItem.quantity}
                        : item
                )
            }
            return[...prev, newItem];
        });
    }
    const updateCart = (updatedList) =>{
        setCartItems(updatedList);
    }

    return(
        <div className='appContainer'>
            <TopNav cart={countItems()}/>
            <main className='pageContainer'>
                <Outlet context={{cartItems, addItemToCart, updateCart}}/>
            </main>
        </div>
    )
}
export{
    App,
}