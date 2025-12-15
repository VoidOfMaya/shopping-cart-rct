import './component/styles/global.css'
import { TopNav } from './component/nav-bar/top-nav'
import { Outlet } from 'react-router'

const App = () =>{

    return(
        <div className='appContainer'>
            <TopNav />
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