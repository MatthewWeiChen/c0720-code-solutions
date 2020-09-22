import React from 'react';
// import Images from './images';

// const images = [
//   {
//     id: 1,
//     link: 'https://pm1.narvii.com/6381/46fefa526ad53600a1440d443bdcf4f6f6e6b866_hq.jpg'
//   },
//   {
//     id: 2,
//     link: 'https://i6.imggur.net/worst/57/worst-605674.jpg'
//   },
//   {
//     id: 3,
//     link: 'https://somewhatwishfulthinking.files.wordpress.com/2015/01/0130-003.jpg'
//   },
//   {
//     id: 4,
//     link: 'https://i6.mangareader.net/worst/107/worst-2296981.jpg'
//   }
// ];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moving: true
    };
  }

  componentDidMount() {

  }
  // getImageList(props) {
  //   const images = this.props.images;
  //   const imageList = images.map(image => {
  //     return (
  //       <Images image={image.link} key={image.id} />
  //     );
  //   });
  // }

  render() {
    const started = this.componentDidMount();
    return (
      <>
        <div className="container">
          <div className="arrow-container">
            <i className="fas fa-angle-left fa-3x"></i>
          </div>
          <img src={started} alt="worst" className="img-height" />
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
