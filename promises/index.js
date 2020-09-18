/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const myName = takeAChance('Matt');
myName.then(value => {
  console.log(value);
}, reason => {
  console.error(reason.message);
});
