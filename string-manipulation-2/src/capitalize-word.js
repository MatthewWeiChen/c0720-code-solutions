/* eslint-disable no-unused-vars */
const capitalizeWord = word => {
  const lowercaseWords = word.toLowerCase();
  let lowerLetter = '';
  const capitalizedWords = lowercaseWords.charAt().toUpperCase();

  for (let i = 1; i < lowercaseWords.length; i++) {
    lowerLetter += lowercaseWords[i];
  }
  if (lowercaseWords === 'javascript') {
    return 'JavaScript';
  }
  return capitalizedWords + lowerLetter;
};
