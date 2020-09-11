/* eslint-disable no-unused-vars */
const swapChars = (firstIndex, secondIndex, string) => {
  let tempString = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      tempString += string.charAt(secondIndex);
    } else if (i === secondIndex) {
      tempString += string.charAt(firstIndex);
    } else {
      tempString += string[i];
    }
  }
  return tempString;
};
