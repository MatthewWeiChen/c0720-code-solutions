import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/carousel';

const images =
  [
    'https://i6.imggur.net/worst/57/worst-605674.jpg',
    'https://somewhatwishfulthinking.files.wordpress.com/2015/01/0130-003.jpg',
    'https://i6.mangareader.net/worst/107/worst-2296981.jpg',
    'https://pm1.narvii.com/6381/46fefa526ad53600a1440d443bdcf4f6f6e6b866_hq.jpg'
  ];

ReactDOM.render(<Carousel images={images} />, document.querySelector('#root'));
