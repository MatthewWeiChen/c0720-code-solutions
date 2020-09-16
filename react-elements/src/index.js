import React from 'react';
import ReactDom from 'react-dom';

const helloMessage = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDom.render(helloMessage, document.getElementById('root'));
