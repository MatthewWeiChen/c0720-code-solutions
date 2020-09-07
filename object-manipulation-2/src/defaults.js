/* eslint-disable no-unused-vars */
// input target, source both objects
// output is a modified target object
// compares properties in target and source
// for every property not in target add to target

const defaults = (target, source) => {
  let property;
  const sourceKeys = Object.keys(source);
  if (Object.keys(target).length === 0) {
    Object.assign(target, source);
    return target;
  } else {
    for (property in target) {
      if (!sourceKeys.includes(property)) {
        target[property] = source[property];
      }
    }
  }
  return target;
};

// comparing two objects
