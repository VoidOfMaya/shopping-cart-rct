import './component/styles/global.css'
import { TopNav } from './component/nav-bar/top-nav'
import { Outlet } from 'react-router'

const App = () =>{

    return(
        <>
            <TopNav />
            <div className='pageContainer'>
                <Outlet/>
            </div>
        </>
    )
}
export{
    App,
}