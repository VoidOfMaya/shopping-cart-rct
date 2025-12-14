import { Link } from "react-router"
import styles from'./nav.module.css'

const TopNav = () =>{
    return(
        <nav>
            <div className={styles.branding}>myShop</div>
            <Link to={'/'} className="navLink">Home</Link>
            <Link to={'Store'} className="navLink">Store</Link>
            <Link to={'Cart'} className="navLink">Cart</Link>
            
        </nav>
    )
}

export{
    TopNav
}