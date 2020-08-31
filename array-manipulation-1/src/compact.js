/* eslint-disable no-unused-vars */
// function that checks if there are undefined values in array

const compact = array => {
  const compactArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArray.push(array[i]);
    }
  }
  return compactArray;
};
