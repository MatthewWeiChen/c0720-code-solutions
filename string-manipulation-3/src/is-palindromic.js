/* eslint-disable no-unused-vars */

const isPalindromic = string => {
  const checkCase = /[\W_]/g;
  const palendromePossible = string.replace(checkCase, '');
  const letterReverse = palendromePossible.split('').reverse().join('');
  return palendromePossible === letterReverse;
};
