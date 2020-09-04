const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  fs.writeFile(process.argv[3], data, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
});
