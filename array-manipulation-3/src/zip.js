/* eslint-disable no-unused-vars */
// input two arrays
// return array of arrays.
// first index put in array with second array first index
// leftover elements that don't have pairs don't add to array.
// The "zipped" result is only as long as the shorter of first and second.
// length has to be the shorter of first and second. either one whichever is shorter

const zip = (first, second) => {
  const zippedList = [];
  for (let i = 0; i < first.length; i++) {
    const nestedArr = [];
    if (first[i] === undefined || second[i] === undefined) {
      return zippedList;
    } else {
      nestedArr.push(first[i], second[i]);
      zippedList.push(nestedArr);
    }
  }
  return zippedList;
};
