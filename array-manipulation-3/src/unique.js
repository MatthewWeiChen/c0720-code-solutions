/* eslint-disable no-unused-vars */
// input array
// output new array only with unique elements of array
// order they first appear in array
// only 1 iteration of each element

// iterate through array
// each iteration except first check if it is already in array
// push first and push single copies
// if copy found ignore it

// includes method

const unique = array => {
  const uniqueList = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueList.includes(array[i])) {
      uniqueList.push(array[i]);
    }
  }
  return uniqueList;
};

// maybe counter
// go through each index if current value - index = 0; add
