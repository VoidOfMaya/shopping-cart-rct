
import { Carousel } from "../carousel/carousel";
import {About} from "../aboutUs/aboutUs.jsx";
import style from './home.module.css';
const Home = () =>{
    return(
        <div className={style.homePage} >
               
            <h1 className={style.headerTitle}>UShope</h1>
            <Carousel/>
            <About/>

        </div>
    )
}
export {
    Home,
}