/* eslint-disable no-unused-vars */

const drop = (array, count) => {
  const droppedArr = [];
  const droppedIndex = [];
  for (let i = 0; i < array.length; i++) {
    if (i < count) {
      droppedIndex.push(array[i]);
    } else {
      droppedArr.push(array[i]);
    }
  }
  return droppedArr;
};
