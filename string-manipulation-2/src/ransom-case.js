/* eslint-disable no-unused-vars */
const ransomCase = string => {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newString += string.charAt(i).toLowerCase();
    } else {
      newString += string.charAt(i).toUpperCase();
    }
  }
  return newString;
};
