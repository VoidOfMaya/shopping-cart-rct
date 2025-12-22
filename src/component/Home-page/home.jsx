
import { Carousel } from "../carousel/carousel";
import {Footer} from "../footer/footer.jsx";

import style from './home.module.css';
const Home = () =>{
    return(
        <div className={style.homePage} >
            <h1 className={style.headerTitle}>UShope</h1>
            <Carousel/>
            <Footer />

        </div>
    )
}
export {
    Home,
}