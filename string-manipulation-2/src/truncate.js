/* eslint-disable no-unused-vars */

const truncate = (length, string) => {
  let truncateString = '';
  if (string === '') {
    return '...';
  } else {
    for (let i = 0; i < length; i++) {
      truncateString += string[i];
    }
  }
  if (length >= string.length) {
    return string + '...';
  }
  return `${truncateString}...`;

};
