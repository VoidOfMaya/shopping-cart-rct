import style from './carousel.module.css';
//products
import productPhotoL from '/src/assets/photos/large(2400 X1600)/products(large).jpg' ;
import productPhotoM from '/src/assets/photos/medium(1920 X1280)/products(medium).jpg';
import productPhotoS from '/src/assets/photos/small(640 X 426)/products(small).jpg';
//pinapple
import pappleL from '/src/assets/photos/large(2400 X1600)/pinapple(large).jpg';
import pappleM from '/src/assets/photos/medium(1920 X1280)/pinapple(medium).jpg';
import pappleS from '/src/assets/photos/small(640 X 426)/pinapple(small).jpg';
//shoes
import shoesL from '/src/assets/photos/large(2400 X1600)/shoes(large).jpg';
import shoesM from '/src/assets/photos/medium(1920 X1280)/shoes(medium).jpg';
import shoesS from '/src/assets/photos/small(640 X 426)/shoes(small).jpg';
//watch
import watchL from '/src/assets/photos/large(2400 X1600)/watch(large).jpg';
import watchM from '/src/assets/photos/medium(1920 X1280)/watch(medium).jpg';
import watchS from '/src/assets/photos/small(640 X 426)/watch(small).jpg';

const productsSlide = () =>{
    return(
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
    )
}
const pinappleSlide = () =>{
    return(
        <picture>
            <source media='(min-width: 1200px)' srcSet={pappleL}/>
            <source media='(min-width: 768px)' srcSet={pappleM}/>
             <img 
            src={pappleS} 
            alt='carousel photo' 
            className={style.carouselPhoto}
            loading="lazy"
            decoding="async"
            />
        </picture>
    )
}
const shoesSlide = () =>{
    return(
        <picture>
            <source media='(min-width: 1200px)' srcSet={shoesL}/>
            <source media='(min-width: 768px)' srcSet={shoesM}/>
             <img 
            src={shoesS} 
            alt='carousel photo' 
            className={style.carouselPhoto}
            loading="lazy"
            decoding="async"
            />
        </picture>
    )
}
const watchSlide = () =>{
    return(
        <picture>
            <source media='(min-width: 1200px)' srcSet={watchL}/>
            <source media='(min-width: 768px)' srcSet={watchM}/>
             <img 
            src={watchS} 
            alt='carousel photo' 
            className={style.carouselPhoto}
            loading="lazy"
            decoding="async"
            />
        </picture>
    )
}
export{
    productsSlide,
    pinappleSlide,
    shoesSlide,
    watchSlide,    
}