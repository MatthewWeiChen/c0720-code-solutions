/* eslint-disable no-console */

// write to data.json
// read function

const fs = require('fs');
const dataJson = require('./data.json');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  for (data in dataJson.notes) {
    console.log(`${data}: ${dataJson.notes[data]}`);
  }
});

// User can add a note
// writefile
// if third argument is create execute this
// stringify

// if (process.argv[2] === "create") {
//   fs.writeFile('./data.json', dataJson, (err) => {
//     if (err) {
//       console.error(err)
//       process.exit(1);
//     }
//     dataJson.nextId++;
//     // dataJson.notes = JSON.stringify(, null, 2);
//     // dataJson.notes = process.argv[3];
//   });

// }
