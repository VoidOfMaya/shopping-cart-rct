import style from './store.module.css';
import { Card } from '../product-card/card';

const Store = () =>{
    return(
        <div className={style.storePage}>

            <h1 className={style.title}>Store Page</h1>
            <div>
                <Card />
            </div>
        </div>
    )
}
export {
    Store,
}