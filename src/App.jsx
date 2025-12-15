import './component/styles/global.css'
import { TopNav } from './component/nav-bar/top-nav'
import { Outlet } from 'react-router'
import { useState } from 'react'

const App = () =>{
    const [cartItems, setCartItems]= useState(null)

    const countItems=()=>{
        if(cartItems){
           return cartItems.length;
        }else{
            return 0;
        }
    }
    const addItemToCart = (item) =>{
        setCartItems(item)
    }

    return(
        <div className='appContainer'>
            <TopNav cart={countItems()}/>
            <div className='pageContainer'>
                <Outlet/>
            </div>
            <footer>Footer holder</footer>
        </div>
    )
}
export{
    App,
}