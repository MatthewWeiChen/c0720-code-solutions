const express = require('express');
const grades = [];
const app = express();
let nextId = 1;
const parseJson = express.json();

app.use(parseJson);

app.post('/api/grades', (req, res) => {
  const jsonBody = req.body;
  res.status(201);
  jsonBody.id = nextId++;
  grades.push(jsonBody);
  res.json(jsonBody);
});

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
