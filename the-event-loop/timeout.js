/* eslint-disable no-console */
console.log('Hello, just a moment...');

const delayResponse = setTimeout(() => {
  console.log('Thanks for waiting');
}, 2000);

delayResponse();
