import './component/styles/global.css'
import { TopNav } from './component/nav-bar/top-nav'
import { Outlet } from 'react-router'
import { useState } from 'react'

const App = () =>{
    const [cartItems, setCartItems]= useState([])

    const countItems=()=>{
        return cartItems.length;
    }
    const addItemToCart = (item) =>{
        setCartItems((prevItem)=> [...prevItem, item]);
    }

    return(
        <div className='appContainer'>
            <TopNav cart={countItems()}/>
            <div className='pageContainer'>
                <Outlet context={{cartItems, addItemToCart}}/>
            </div>
            <footer>Footer holder</footer>
        </div>
    )
}
export{
    App,
}