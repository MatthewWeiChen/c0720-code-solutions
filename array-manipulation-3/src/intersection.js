/* eslint-disable no-unused-vars */
// input two arrays
// output new array
// new array containing unique values found in both first and second
// order matters

const intersection = (first, second) => {
  const intersectionList = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      intersectionList.push(first[i]);
    }
  }
  return intersectionList;
};
