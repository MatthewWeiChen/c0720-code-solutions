/* eslint-disable no-unused-vars */
let property;
const pick = (source, key) => {
  const pickObj = {};
  for (property in source) {
    for (let i = 0; i < key.length; i++) {
      if (source[property] === undefined) {
        return pickObj;
      } else if (property === key[i]) {
        pickObj[property] = source[property];
      }
    }
  }
  return pickObj;
};
