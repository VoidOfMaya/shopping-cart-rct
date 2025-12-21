import style from './carousel.module.css';

//importing photo sets
import productPhotoL from '/src/assets/photos/large(2400 X1600)/products(large).jpg' ;
import productPhotoM from '/src/assets/photos/medium(1920 X1280)/products(medium).jpg';
import productPhotoS from '/src/assets/photos/small(640 X 426)/products(small).jpg';

const Carousel = () =>{
    return(
        <div>
            <picture>
                <source media='(min-width: 1200px)' srcSet={productPhotoL}/>
                <source media='(min-width: 768px)' srcSet={productPhotoM}/>
                <img 
                src={productPhotoS} 
                alt='carousel photo' 
                className={style.carouselPhoto}
                loading="lazy"
                decoding="async"
                />
            </picture>
        </div>
    )
}
export {
    Carousel
}