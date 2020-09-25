import React, { useState, useEffect } from 'react';
// import Images from './images';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const imagesLength = images.length;

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
        <div>
          {images.map((image, index) => (
            <div className={index === current ? 'img-height' : 'hidden'} key={index}>
              <img src={image} alt="worst" />
            </div>
          ))}
        </div>
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
