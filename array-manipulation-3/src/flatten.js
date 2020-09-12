/* eslint-disable no-unused-vars */
const flatten = array => {
  let flattenedArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenedArr = flattenedArr.concat(array[i]);
    } else {
      flattenedArr.push(array[i]);
    }
  }
  return flattenedArr;
};
