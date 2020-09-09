/* eslint-disable no-unused-vars */
// input two arrays
// output new array
// difference between first and second

const difference = (first, second) => {
  const differenceList = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      differenceList.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      differenceList.push(second[i]);
    }
  }
  return differenceList;
};
