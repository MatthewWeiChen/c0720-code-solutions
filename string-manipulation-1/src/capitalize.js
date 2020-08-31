/* eslint-disable no-unused-vars */

const capitalize = word => {
  const newWord = word.toLowerCase();
  const upperCaseLetter = word[0].toUpperCase();
  return upperCaseLetter + newWord.slice(1);

};
