/* eslint-disable no-unused-vars */
const unique = array => {
  const uniqueList = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueList.includes(array[i])) {
      uniqueList.push(array[i]);
    }
  }
  return uniqueList;
};
