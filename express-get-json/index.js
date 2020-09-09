const express = require('express');
const grades = [
  {
    id: 1,
    name: 'Matt Chen',
    course: 'Everything',
    grade: 100
  },
  {
    id: 2,
    name: 'Rock Lee',
    course: 'Taijustu',
    grade: 99
  }
];
const app = express();

app.use((req, res, next) => {
  if (req.originalUrl === '/api/grades') {
    res.json(grades);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
