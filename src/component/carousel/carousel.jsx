import style from './carousel.module.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router"
import dotSvg from '/src/assets/icons/circle-small.svg'

//importing photo sets
import {
    productsSlide,
    pinappleSlide,
    shoesSlide,
    watchSlide,    
} from './photosset'

const Carousel = () =>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        productsSlide,
        pinappleSlide,
        shoesSlide,
        watchSlide]

    useEffect(()=>{
        const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 20000);
        return () => clearInterval(interval);
    },[]);
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return(
        <div className={style.carousel}>
            <div
                className={style.track}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((SlidePhoto, index) => (
                <div key={index} className={style.carouselSlide}>
                    <SlidePhoto />
                </div>
                ))}
            </div>
            {/* Arrows */}
            <button className={style.arrowLeft} onClick={prevSlide}>
            &#10094;
            </button>
            <button className={style.arrowRight} onClick={nextSlide}>
            &#10095;
            </button>

        {/* Dots */}
            <div className={style.dotsContainer}>
                {slides.map((_, index) => (
                <div
                    key={index}
                    className={`${style.dot} ${index === currentIndex ? style.active : ""}`}
                    onClick={() => goToSlide(index)}
                    onMouseOver={(e) => (e.target.innerText = "O")}
                    onMouseOut={(e) => (e.target.innerText = index === currentIndex ? "O" : "o")}
                >
                    <img src={dotSvg} className={index === currentIndex ? style.dotActive: '' } />
                </div>
            ))}
            </div> 
             {/*shop now!*/}
            <Link  to={'Store'} className={style.callToAction}>Shop Now!</Link>
        </div>
        
    )
}
export {
    Carousel
}