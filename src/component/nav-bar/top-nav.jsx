import { Link } from "react-router"
import style from'./nav.module.css'
import cartDvg from '/src/assets/icons/cart-outline.svg'
import shopSvg from '/src/assets/icons/shopping.svg'
import homeSvg from '/src/assets/icons/home (1).svg'

const TopNav = ({cart}) =>{

    return(
        <div className={style.navBar}>
            <h1 className={style.branding}>UShop</h1>
            <nav>
                <Link to={'/'} className={style.navLink}>
                <img className={style.navIcons} src={homeSvg} alt="Home"/>
                Home</Link>
                <Link to={'Store'} className={style.navLink}>
                <img className={style.navIcons} src={shopSvg} alt="Shop"/>
                Store</Link>
                <Link to={'Cart'} className={style.navLink} >
                <div className={style.cartItems}>{cart}</div>
                <img  className={style.navIcons} src={cartDvg} alt="Cart"/>
                
                Cart
                </Link>
            </nav>
        </div>
    )
}

export{
    TopNav
}