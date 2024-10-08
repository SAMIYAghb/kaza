import left from '../../assets/arrow_left.png';
import right from '../../assets/arrow_right.png';
import style from './Carrousel.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };


  return (
    <div className={style.carrousel}>
      <div className={style.carrouselContent}>
      {images.length > 1 && (
        <button
          onClick={prevSlide}
          className={style.previous}>
          <img src={left} alt="previous image"  className={style.previousIcon}/>
        </button>
      )}
        <img src={images[currentIndex]} alt="" className={style.carrouselImg} />
      {images.length > 1 && (
        <button
          onClick={nextSlide}
          className={style.next}>
          <img src={right} alt="next image" className={style.nextIcon}/>
        </button>
      )}
      {images.length > 1 && (
        <span className={style.indicator}>{`${currentIndex + 1}/${images.length}`}</span>
      )}
      </div>
    </div>
  )
}
Carrousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Carrousel
