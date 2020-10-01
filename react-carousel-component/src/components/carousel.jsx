import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const imagesLength = images.length;

  const goNextImage = () => {
    setCurrent(current === imagesLength - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const id = setTimeout(goNextImage, 3000);
    return () => clearTimeout(id);
  }, [current]);

  const moveRight = () => {
    setCurrent(current === imagesLength - 1 ? 0 : current + 1);
  };

  const moveLeft = () => {
    setCurrent(current === 0 ? 3 : current - 1);
  };

  // dots hide or show depending on index

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <i onClick={moveLeft} className="fas fa-angle-left fa-3x mr-5"></i>
          <div>
            {images.map((image, index) => (
              <div className={index === current ? 'show' : 'hidden'} key={index}>
                <img className="img-height" src={image} alt="worst" />
              </div>
            ))}
          </div>
          <i onClick={moveRight} className="fas fa-angle-right fa-3x ml-5"></i>
        </div>
        <div className="dot-container">
          <i className="fas fa-circle dot-spacing"></i>
          <i className="far fa-circle dot-spacing"></i>
          <i className="far fa-circle dot-spacing"></i>
          <i className="far fa-circle dot-spacing"></i>
        </div>

      </div>
    </>
  );
};

export default Carousel;
