
import { Carousel } from "../carousel/carousel";
import style from './home.module.css';
const Home = () =>{
    return(
        <div className={style.homePage} >
               
            <h1 className={style.headerTitle}>UShope</h1>
            <Carousel/>

        </div>
    )
}
export {
    Home,
}