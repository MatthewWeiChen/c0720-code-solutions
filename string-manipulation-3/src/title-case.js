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

const titleCase = title => {
  const allLowerCase = title.toLowerCase();
  const titleArr = allLowerCase.split(' ');
  const answer = [];
  if (!allLowerCase.includes(':')) {
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
    return answer.join(' ');
  } else {
    const splitWords = allLowerCase.split(':');
    const firstHalf = splitWords[0];
    const secondHalf = splitWords[1];
    const firstHalfArr = firstHalf.split(' ');
    const secondHalfArr = secondHalf.split(' ');
    secondHalfArr.shift();
    for (let j = 0; j < firstHalfArr.length; j++) {
      if (firstHalfArr[j] === 'javascript') {
        answer.push('JavaScript:');
      } else {
        const upperLetter = firstHalfArr[j].charAt(0).toUpperCase() + firstHalfArr[j].slice(1);
        answer.push(upperLetter);
      }
    }
    for (let k = 0; k < secondHalfArr.length; k++) {
      if (secondHalfArr[k] === secondHalfArr[0]) {
        const upperLetter = secondHalfArr[k].charAt(0).toUpperCase() + secondHalfArr[k].slice(1);
        answer.push(upperLetter);
      } else if (secondHalfArr[k].includes('-')) {
        const hyphenWord = secondHalfArr[k].split('-');
        const upperFirst = hyphenWord[0].charAt().toUpperCase() + hyphenWord[0].slice(1);
        const upperSecond = hyphenWord[1].charAt().toUpperCase() + hyphenWord[1].slice(1);
        answer.push(`${upperFirst}-${upperSecond}`);
      } else if (secondHalfArr[k].length >= 4) {
        const upperLetter = secondHalfArr[k].charAt(0).toUpperCase() + secondHalfArr[k].slice(1);
        answer.push(upperLetter);
      } else {
        answer.push(secondHalfArr[k]);
      }
    }
    return answer.join(' ');
  }
};
