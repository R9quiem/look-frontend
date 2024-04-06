import { useState } from 'react';
import "./BannerCarousel.sass";
const BannerCarousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % props.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + props.slides.length) % props.slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__slides">
        {props.slides.map((slide, index) => (
          <div key={index} className="carousel__slides__item" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            <h3>{slide}</h3>
          </div>
        ))}
      </div>
      <button className="carousel__button-prev" onClick={prevSlide}>
        <span>&#10094;</span>
      </button>
      <button className="carousel__button-next" onClick={nextSlide}>
        <span>&#10095;</span>
      </button>
      <div className="carousel__dots">
        {props.slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'carousel__dots__item carousel__dots__item_active' : 'carousel__dots__item'}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;