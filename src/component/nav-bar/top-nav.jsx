import { Link } from "react-router"
import style from'./nav.module.css'

const TopNav = ({cart}) =>{
    return(
        <nav>
            <h1 className={style.branding}>myShop</h1>
            <Link to={'/'} className={style.navLink}>Home</Link>
            <Link to={'Store'} className={style.navLink}>Store</Link>
            <Link to={'Cart'} className={style.navLink}>
            <div className={style.cartItems}>{cart}</div>
            Cart</Link>
            
        </nav>
    )
}

export{
    TopNav
}