/* eslint-disable no-unused-vars */
const union = (first, second) => {
  const unionList = [];
  for (let i = 0; i < first.length; i++) {
    unionList.push(first[i]);
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      unionList.push(second[i]);
    }
  }
  return unionList;
};
