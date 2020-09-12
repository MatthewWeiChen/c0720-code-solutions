/* eslint-disable no-unused-vars */
// input string
// output string with APA title case style

// capitalize first word of the title and any subtitle
// capitalize major words and hyphenated major words
// capitalize all words of four letters or more
// lowercase minor words

// data structure - array
// includes for search
// break it down into arrays
// look at element if word is 4 letters or more must be capitalized.
// if word is hyphen capitalize word left and right of it

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

const titleCase = title => {
  const titledSentence = '';
  const lowercasedSentence = title.toLowerCase();
  const sentenceArray = lowercasedSentence.split(' ');
  const lowerLetters = '';
  // for (let i = 0; i < sentenceArray.length; i++) {
  //   if (sentenceArray[i].length > 4) {

  //   }
  // const individualLetters = sentenceArray[i].split('');
  // for (let j = 0; j < individualLetters.length; j++) {

  // }
};
// console.log(sentenceArray);
// };
