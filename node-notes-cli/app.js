/* eslint-disable no-console */

// write to data.json
// read function

const fs = require('fs');
const dataJson = require('./data.json');
let data;
if (process.argv[2] === 'read') {
  for (data in dataJson.notes) {
    console.log(`${data}: ${dataJson.notes[data]}`);
  }
} else if (process.argv[2] === 'create') {
  dataJson.notes[dataJson.nextId++] = process.argv[3];
  fs.writeFile('./data.json', JSON.stringify(dataJson), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (process.argv[2] === 'delete') {
  delete dataJson.notes[`${process.argv[3]}`];
  fs.writeFile('./data.json', JSON.stringify(dataJson), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
} else if (process.argv[2] === 'update') {
  dataJson.notes[dataJson[`${process.argv[3]}`]] = process.argv[4];
  fs.writeFile('./data.json', JSON.stringify(dataJson), err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
