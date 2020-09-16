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

const specialWords = ['JavaScript', 'API'];

// if 4 or greater x
// between hyphens
// capitalize first word of the title
// capitalize major words

const titleCase = title => {
  const allLowerCase = title.toLowerCase();
  const titleArr = allLowerCase.split(' ');
  const answer = [];
  for (let i = 0; i < titleArr.length; i++) {
    if (titleArr[i].length >= 4 && titleArr[i] !== 'javascript') {
      const upperLetter = titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1);
      answer.push(upperLetter);
    }
    if (titleArr[i].endsWith(':')) {
      const upperLetter = titleArr[i + 1].charAt(0).toUpperCase() + titleArr[i + 1].slice(1);
      answer.push(upperLetter);
    }
    if (minorWords.includes(titleArr[i])) {
      answer.push(titleArr[i]);
    }
    if (titleArr[i] === 'javascript') {
      answer.push('JavaScript');
    }
    if (titleArr[i] === 'api') {
      answer.push('API');
    }
    // if element before current index has ":" capitalize

  }
  return answer.join(' ');
};
