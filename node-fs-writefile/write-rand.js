/* eslint-disable no-console */

const fs = require('fs');

fs.writeFile('random.txt', Math.random(), err => {
  if (err) {
    console.err(err);
    process.exit(1);
  }
  console.log('file has been written');
});
