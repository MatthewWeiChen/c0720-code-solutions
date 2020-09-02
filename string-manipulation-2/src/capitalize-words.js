/* eslint-disable no-unused-vars */

const capitalizeWords = string => {
  const lowerCaseSentence = string.toLowerCase();
  const arr = lowerCaseSentence.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  }

  return arr.join(' ');

};
