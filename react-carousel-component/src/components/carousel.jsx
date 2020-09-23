import React, { useState, useEffect } from 'react';
// import Images from './images';

const images =
  [
    'https://pm1.narvii.com/6381/46fefa526ad53600a1440d443bdcf4f6f6e6b866_hq.jpg',
    'https://i6.imggur.net/worst/57/worst-605674.jpg',
    'https://somewhatwishfulthinking.files.wordpress.com/2015/01/0130-003.jpg',
    'https://i6.mangareader.net/worst/107/worst-2296981.jpg'
  ];

const Carousel = () => {
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
        <img src='https://pm1.narvii.com/6381/46fefa526ad53600a1440d443bdcf4f6f6e6b866_hq.jpg' alt="worst" className="img-height" />
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
