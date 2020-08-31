/* eslint-disable no-unused-vars */
const reverseWord = word => {
  let wordReversed = '';
  for (let i = word.length - 1; i >= 0; i--) {
    wordReversed += word[i];
  }
  return wordReversed;
};
