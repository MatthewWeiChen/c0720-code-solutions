/* eslint-disable no-unused-vars */

const takeRight = (array, count) => {
  const elementsKept = [];
  if (count > array.length) {
    return array;
  } else {
    for (let i = count; i > 0; i--) {
      elementsKept.push(array[array.length - i]);
    }
  }
  return elementsKept;
};
