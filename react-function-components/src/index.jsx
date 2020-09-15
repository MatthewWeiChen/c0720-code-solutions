import React from 'react';
import ReactDom from 'react-dom';

function CustomButton() {
  return <button>Click Me!</button>;
}

ReactDom.render(<CustomButton />, document.getElementById('root'));
