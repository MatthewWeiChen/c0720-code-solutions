/* eslint-disable no-console, no-unused-vars */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [{
  type: 'deposit',
  amount: 150
},
{
  type: 'deposit',
  amount: 20
},
{
  type: 'withdrawal',
  amount: 5
},
{
  type: 'deposit',
  amount: 100
},
{
  type: 'withdrawal',
  amount: 25
},
{
  type: 'withdrawal',
  amount: 60
}
];

const traits = [{
  color: 'yellow'
},
{
  type: 'electric'
},
{
  name: 'pikachu'
},
{
  level: 15
},
{
  trainer: 'ash'
}
];

const sum = (num1, num2) => num1 + num2;
const sumTotal = numbers.reduce(sum);
console.log(sumTotal);

const product = numbers.reduce((num1, num2) => num1 * num2);
console.log(product);

// accumulator will be 150
// if type is deposit add to accumulator
// else subtract from accumulator

const balance = account.reduce((total, changes) => {
  if (changes.type === 'deposit') {
    total += changes.amount;
  } else {
    total -= changes.amount;
  }
  return total;
}, 0);
console.log(balance);

const composite = traits.reduce((traits, combinedTraits) => {
  const obj = Object.assign(combinedTraits, traits);
  return obj;
});
console.log(composite);
