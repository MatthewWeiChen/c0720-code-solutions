/* eslint-disable no-unused-vars */
const getWords = string => {
  const getWordsArr = [];
  if (string.length === 0) {
    return getWordsArr;
  } else {
    const newWords = string.split(' ');
    return newWords;
  }

};
// "hello there"
