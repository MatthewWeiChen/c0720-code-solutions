/* eslint-disable no-console */
const fs = require('fs');

fs.writeFile('note.txt', process.argv[2], err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
