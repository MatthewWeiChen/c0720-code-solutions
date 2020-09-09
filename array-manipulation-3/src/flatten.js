/* eslint-disable no-unused-vars */
// reduce and concat
// input one array
// return new erray
// flatten array by one level - take out nested elements by 1 array.

// isArray to check for nested arrays.
// create new array and push elements in that array
// if its nested go into array and push individual elements out.

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
