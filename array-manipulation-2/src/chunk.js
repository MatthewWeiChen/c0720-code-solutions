/* eslint-disable no-unused-vars */

const chunk = (array, size) => {
  const chunkedList = [];
  for (let i = 0; i < array.length; i++) {
    const last = chunkedList[chunkedList.length - 1];
    if (!last || last.length === size) {
      chunkedList.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunkedList;
};
