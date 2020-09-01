/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = number => {
  return number * 2;
};
const doubledList = numbers.map(doubled, 0);
console.log(doubledList);

const prices = price => '$' + price.toFixed(2);

const priceList = numbers.map(prices, 0);
console.log(priceList);

const upperCased = language => language.toUpperCase();

const upperCasedList = languages.map(upperCased, 0);
console.log(upperCasedList);

const firstLetters = language => language[0];

const firstLettersList = languages.map(firstLetters, 0);
console.log(firstLettersList);
