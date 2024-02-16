import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import sliderHifu from './sliderHifu.png';
import sliderDepi from './sliderDepi.png';
import './Slider.css';

const images = [
  {
    id: 1,
    src: sliderHifu,
    link: 'https://www.ejemplo1.com',
  },
  {
    id: 2,
    src:  sliderDepi,
    link: 'https://www.ejemplo2.com',
  },
  {
    id: 3,
    src: sliderHifu,
    link: 'https://www.ejemplo3.com',
  },
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const imageStyle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleClick = () => {
    const currentLink = images[index].link;
    window.location.href = currentLink;
  };

  const handleDotClick = (dotIndex) => {
    setIndex(dotIndex);
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextImage();
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [index]);

  useEffect(() => {
    setActiveIndex(index);
  }, [index]);

  return (
    <div className="carousel-container">
      <button className="nav-button left" onClick={prevImage}>
        <FaChevronLeft />
      </button>
      <animated.img
        style={imageStyle}
        src={images[index].src}
        alt={`Slide ${index + 1}`}
        onClick={handleClick}
      />
      <button className="nav-button right" onClick={nextImage}>
        <FaChevronRight />
      </button>
      <div className="dots-container">
        {images.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

function Slider() {
  return (
    <>
      <ImageCarousel />
    </>
  );
}

export default Slider;

