/* eslint-disable no-unused-vars */
// two inputs firstString, secondString
// output boolean
// checks if is anagram
// checks if all letters are in first and second

// match
// take out spaces
// make them arrays

const isAnagram = (firstString, secondString) => {
  const findSpace = /[\W_]/g;
  const firstStringNoSpace = firstString.replace(findSpace, '').split('');
  const sortedFirstString = firstStringNoSpace.sort().join('');
  const secondStringNoSpace = secondString.replace(findSpace, '').split('');
  const sortedSecondString = secondStringNoSpace.sort().join('');

  return sortedFirstString === sortedSecondString;
};
