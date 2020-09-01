/* eslint-disable no-unused-vars */

// receive array with two elements. 1 string and 2 any js value
// create them into objects with key value pair

const toObject = keyValuePair => {
  const obj = {
    [keyValuePair[0]]: keyValuePair[1]
  };
  return obj;
};

// grab array
// index 0 becomes key
// index 1 becomes value

// ['firstName','David']
//= {firstName: "David"}
