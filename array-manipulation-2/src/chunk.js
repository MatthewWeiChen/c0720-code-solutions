/* eslint-disable no-unused-vars */

// array of arrays multidimensional
// receives size for chunk
// for loop
// if condition
// every iteration create it's own array and push to an array

const chunk = (array, size) => {
  const nestedArr = [];
  const insideArr = [];
  for (let i = 0; i < size; i++) {
    insideArr.push(array[i]);
  }

  nestedArr.push(insideArr);
  return nestedArr;
};
