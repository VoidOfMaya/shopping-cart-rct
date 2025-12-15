import { Link } from "react-router"
import styles from'./nav.module.css'

const TopNav = () =>{
    return(
        <nav>
            <h1 className={styles.branding}>myShop</h1>
            <Link to={'/'} className="navLink">Home</Link>
            <Link to={'Store'} className="navLink">Store</Link>
            <Link to={'Cart'} className="navLink">Cart</Link>
            
        </nav>
    )
}

export{
    TopNav
}