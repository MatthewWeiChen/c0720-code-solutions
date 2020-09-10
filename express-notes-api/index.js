const express = require('express');
const dataJson = require('./data.json');
const app = express();

// clients can get a list of notes
// route /api/notes
// 200 response
// res.json(json object)
// require data.json auto parses

app.get('/api/grades', (req, res) => {
  res.json(dataJson);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
