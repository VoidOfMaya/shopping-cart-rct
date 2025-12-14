import { Link } from "react-router"

const TopNav = () =>{
    return(
        <nav>
            <div>myShop</div>

            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'Store'}>Store</Link></li>
                <li><Link to={'Cart'}>Cart</Link></li>
            </ul>
        </nav>
    )
}

export{
    TopNav
}