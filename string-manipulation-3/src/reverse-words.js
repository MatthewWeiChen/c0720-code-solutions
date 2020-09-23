/* eslint-disable no-unused-vars */
// input string
// output reversed string

// put them as array
// each individual is an array
// join them together

const reverseWords = string => {
  const reverseString = [];
  const arrayString = string.split(' ');
  for (let i = 0; i < arrayString.length; i++) {
    const reverseWord = [];
    const wordSplit = arrayString[i].split('');
    for (let j = wordSplit.length - 1; j >= 0; j--) {
      reverseWord.push(wordSplit[j]);

    }
    reverseString.push(reverseWord.join(''));
  }

  return reverseString.join(' ');
};
