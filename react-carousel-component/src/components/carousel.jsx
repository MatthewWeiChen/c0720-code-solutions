import React, { useState, useEffect } from 'react';
// import Images from './images';

const Carousel = props => {
  const [current, setCurrent] = useState(0);
  const imagesLength = props.images.length;

  const goNextImage = () => {
    setCurrent(current === imagesLength - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    setTimeout(goNextImage, 3000);
  });

  return (
    <>
      <div className="container">
        <div className="arrow-container">
          <i className="fas fa-angle-left fa-3x"></i>
        </div>
        <img src={props.images[0]} alt="worst" className="img-height" />
        <div className="arrow-container">
          <i className="fas fa-angle-right fa-3x"></i>
        </div>
      </div>
      <div className="dot-container">
        <i className="fas fa-circle dot-spacing"></i>
        <i className="far fa-circle dot-spacing"></i>
        <i className="far fa-circle dot-spacing"></i>
        <i className="far fa-circle dot-spacing"></i>
        <i className="far fa-circle dot-spacing"></i>
      </div>
    </>
  );
};

export default Carousel;
