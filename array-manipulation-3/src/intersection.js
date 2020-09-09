/* eslint-disable no-unused-vars */
const intersection = (first, second) => {
  const intersectionList = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      intersectionList.push(first[i]);
    }
  }
  return intersectionList;
};
