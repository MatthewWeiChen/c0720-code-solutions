/* eslint-disable no-unused-vars */

const omit = (source, keys) => {
  let property;
  const omitObj = {};
  for (property in source) {
    if (!keys.includes(property)) {
      omitObj[property] = source[property];
    }
  }
  return omitObj;
};
