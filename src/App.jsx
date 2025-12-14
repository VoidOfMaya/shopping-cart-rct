import { Home } from './component/Home-page/home'
import { Store } from './component/Store-page/store'
import { Cart } from './component/Cart-page/cart'
import { TopNav } from './component/nav-bar/top-nav'
import { Outlet } from 'react-router'

const App = () =>{

    return(
        <>
            <TopNav />
            <div>
                <Outlet/>
            </div>
        </>
    )
}
export{
    App,
}