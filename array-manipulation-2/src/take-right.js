/* eslint-disable no-unused-vars */

const takeRight = (array, count) => {
  const elementsKept = [];
  for (let i = count; i > 0; i--) {
    elementsKept.push(array[i]);
  }
  return elementsKept;
};
