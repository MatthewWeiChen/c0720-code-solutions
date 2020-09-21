import React from 'react';

// const images = [
//   {
//     id: 1,
//     link: 'https://pm1.narvii.com/6381/46fefa526ad53600a1440d443bdcf4f6f6e6b866_hq.jpg'
//   }
// ];

export default class Carousel extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="arrow-container">
            <i className="fas fa-angle-left fa-3x"></i>
          </div>
          <img src="https://pm1.narvii.com/6381/46fefa526ad53600a1440d443bdcf4f6f6e6b866_hq.jpg" alt="worst" className="img-height" />
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
  }
}
