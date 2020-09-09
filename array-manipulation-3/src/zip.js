/* eslint-disable no-unused-vars */
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
