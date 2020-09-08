const express = require('express');

const app = express();

app.use(function (req, res) {
  // eslint-disable-next-line no-console
  console.log(req);
  res.send('Hello World!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
