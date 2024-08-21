
// import Container from './../Container/Container';
// import PropTypes from 'prop-types';
// import { useState } from 'react';

// const Carrousel = ({pictures, title}) => {
//     const [currentIndex, setCurrentIndex] = useState();

//     const nextSlide = () => {
//         // setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
//       };

//       const prevSlide = () => {
//         // setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
//       };
//   return (
//     <section>
//       {/* <Container> */}
//         <div className="carrousel">
//         <button className="carousel-button prev" onClick={prevSlide}>
//         &#10094;
//       </button>

//       {/* <img src={pictures[currentIndex]} alt="Carrousel" className="carousel-image" /> */}

//       <button className="carousel-button next" onClick={nextSlide}>
//         &#10095;
//       </button>

//             {/* <img src={pictures} alt={title} /> */}
//         </div>
//       {/* </Container> */}
//     </section>
//   )
// }

// Carrousel.propTypes = {
//     pictures: PropTypes.node.isRequired,
//     title: PropTypes.node.isRequired,
// };
// export default Carrousel
// import React from 'react'
import banner from '../../assets/aboutBanner.png';
import left from '../../assets/arrow_left.png';
import right from '../../assets/arrow_right.png';
import style from './Carrousel.module.css';


const Carrousel = () => {
  return (
    <div className={style.carrousel}>
        <div className={style.carrouselContent}>
          <button className={style.previous}>
            <img src={left} alt="" />
          </button>
          <img src={banner} alt="" />
          <button className={style.next}>
            <img src={right} alt="" />
          </button>
          <span className={style.indicator}>1/4</span>
        </div>
    </div>
  )
}

export default Carrousel
