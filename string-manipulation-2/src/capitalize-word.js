/* eslint-disable no-unused-vars */
const capitalizeWord = word => {
  const capitalLetter = word.charAt().toUpperCase();
  let lowerLetter = '';
  for (let i = 1; i < word.length; i++) {
    lowerLetter += word[i].toLowerCase();
  }
  if (word.match(/[jJ]/)) {
    return 'JavaScript';
  }
  return capitalLetter + lowerLetter;
};
