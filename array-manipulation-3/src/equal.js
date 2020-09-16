/* eslint-disable no-unused-vars */
const equal = (first, second) => {
  let trueCounter = 0;
  for (let i = 0; i < first.length; i++) {
    if (first[i] === second[i]) {
      trueCounter++;
    } else {
      trueCounter--;
    }
  }
  if (trueCounter === first.length) {
    return true;
  } return false;
};
