import style from './carousel.module.css';
import { useState, useEffect } from 'react';

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
        }, 10000);
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
          {slides.map((SlidePhoto, index)=>(
            <div
            key={index}
              className={`${style.carouselSlide} ${index === currentIndex ? style.active : ""}`}
              style={{display: index === currentIndex ? "block" : "none" }}
              >
                <SlidePhoto />
              </div>
          ))} 
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
                    {index === currentIndex ? "O" : "o"}
                </div>
            ))}
        </div> 
        </div>
        
    )
}
export {
    Carousel
}