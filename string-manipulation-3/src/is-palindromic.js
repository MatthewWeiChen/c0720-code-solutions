/* eslint-disable no-unused-vars */

const isPalindromic = string => {
  const findSpace = /[\W_]/g;
  const palendromePossible = string.replace(findSpace, '');
  const letterReverse = palendromePossible.split('').reverse().join('');
  return palendromePossible === letterReverse;
};
