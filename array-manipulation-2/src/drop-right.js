/* eslint-disable no-unused-vars */

const dropRight = (array, count) => {
  const finalList = [];
  for (let i = 0; i < array.length - count; i++) {
    finalList.push(array[i]);
  }
  return finalList;
};
