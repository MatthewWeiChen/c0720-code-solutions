/* eslint-disable no-console */
const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const calculate = argument => {
  if (argument.includes('plus')) {
    const sum = add(argument[0], argument[2]);
    console.log(sum);
  } else if (argument.includes('minus')) {
    const difference = subtract(argument[0], argument[2]);
    console.log(difference);
  } else if (argument.includes('times')) {
    const product = multiply(argument[0], argument[2]);
    console.log(product);
  } else {
    const quotient = divide(argument[0], argument[2]);
    console.log(quotient);
  }
};

calculate(process.argv.slice(2));
