/* eslint-disable no-unused-vars */

const minorWords = [
  'and',
  'or',
  'nor',
  'but',
  'a',
  'an',
  'the',
  'as',
  'at',
  'by',
  'for',
  'in',
  'of',
  'on',
  'per',
  'to'
];

const specialWords = ['javascript', 'api'];

// if 4 or greater x
// between hyphens
// capitalize first word of the title
// capitalize major words

const titleCase = title => {
  const allLowerCase = title.toLowerCase();
  const titleArr = allLowerCase.split(' ');
  const answer = [];
  const split = allLowerCase.split(':');
  const secondHalf = split[1];
  // if (allLowerCase.includes(':')) {

  //   // for (let i = 0; i < titleArr.length; i++) {
  //   //   if (titleArr[i].endsWith(':')) {
  //   //     const word = titleArr[i].slice(0, 10);
  //   //     const indexColon = titleArr[i].indexOf(':');
  //   //     const colon = titleArr[i].slice(-1);
  //   //     if (word === 'javascript') {
  //   //       answer.push(`JavaScript${colon}`);
  //   //     }
  //   //   }
  //   // }
  //   // for(let j =0; j < secondHalf.length; j++){

  //   // }
  // } else {
  for (let i = 0; i < titleArr.length; i++) {
    if (titleArr[i].length >= 4 && !specialWords.includes(titleArr[i]) && !titleArr[i].endsWith(':')) {
      const upperLetter = titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1);
      answer.push(upperLetter);
    } else if (titleArr[i].length < 4 && !minorWords.includes(titleArr[i]) && !specialWords.includes(titleArr[i])) {
      const upperLetter = titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1);
      answer.push(upperLetter);
    } else if (minorWords.includes(titleArr[i])) {
      answer.push(titleArr[i]);
    } else if (titleArr[i] === 'javascript') {
      answer.push('JavaScript');
    } else if (titleArr[i] === 'api') {
      answer.push('API');
    }
  }
  // if element before current index has ":" capitalize
  // i recommend splitting the title by ': ' then operating on the first half and the second half
  return answer.join(' ');
};
