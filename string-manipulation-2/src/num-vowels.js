/* eslint-disable no-unused-vars */
const vowelList = ['a', 'e', 'i', 'o', 'u'];

const numVowels = string => {
  let count = 0;
  const lowerCase = string.toLowerCase();
  for (let i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] === 'a' || lowerCase[i] === 'e' || lowerCase[i] === 'i' || lowerCase[i] === 'o' || lowerCase[i] === 'u') {
      count += 1;
    }
  }
  return count;
};
