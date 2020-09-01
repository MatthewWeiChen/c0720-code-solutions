/* eslint-disable no-unused-vars */

// receives a sentence
// find each word and capitalize first letter
// if space is found consider before and after are words
// lowercase the rest of the letters
// combine the words together
// form a sentence with the combined words

// lowercase the entire string
// split to make into an array
// grab each index of array and capitalize first letter.
// put together all the words in a sentence and return it

const capitalizeWords = string => {
  const lowerCaseSentence = string.toLowerCase();
  const sentenceArr = lowerCaseSentence.split(' ');
  let storeWord = '';
  let remainingWord = '';
  for (let i = 0; i < sentenceArr.length; i++) {
    storeWord += sentenceArr[i].charAt().toUpperCase();
    for (let j = 1; j < sentenceArr.length; j++) {
      remainingWord += sentenceArr[j];
    }
  }
  return storeWord + remainingWord;
};
