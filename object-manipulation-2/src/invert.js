/* eslint-disable no-unused-vars */
const invert = source => {
  const invertObj = {};
  let property;
  for (property in source) {
    invertObj[source[property]] = property;
  }
  return invertObj;
};
