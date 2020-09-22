import React from 'react';
// import Images from './images';

const images =
  [
    'https://pm1.narvii.com/6381/46fefa526ad53600a1440d443bdcf4f6f6e6b866_hq.jpg',
    'https://i6.imggur.net/worst/57/worst-605674.jpg',
    'https://somewhatwishfulthinking.files.wordpress.com/2015/01/0130-003.jpg',
    'https://i6.mangareader.net/worst/107/worst-2296981.jpg'
  ];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moving: true
    };
    this.getNewImage = this.getNewImage.bind(this);
  }

  componentDidMount() {
    setInterval(this.getNewImage, 3000);
  }
  // getImageList(props) {
  //   const images = this.props.images;
  //   const imageList = images.map(image => {
  //     return (
  //       <Images image={image.link} key={image.id} />
  //     );
  //   });
  // }

  getNewImage() {
    return images[0].link;
  }

  render() {
    const newImage = this.getNewImage();
    return (
      <>
        <div className="container">
          <div className="arrow-container">
            <i className="fas fa-angle-left fa-3x"></i>
          </div>
          <img src={String(newImage)} alt="worst" className="img-height" />
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
