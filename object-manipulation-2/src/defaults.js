/* eslint-disable no-unused-vars */

const defaults = (target, source) => {
  let property;
  const sourceKeys = Object.keys(source);
  const targetKeys = Object.keys(target);
  if (targetKeys.length === 0) {
    Object.assign(target, source);
    return target;
  } else {
    for (property in source) {
      if (!targetKeys.includes(property)) {
        target[property] = source[property];
      }
    }
  }
  return target;
};
