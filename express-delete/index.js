const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'Matthew Chen',
    course: 'LFZ',
    grade: 100000
  },
  {
    id: 2,
    name: 'Randall Park',
    course: 'Comedy',
    grade: 100
  }
];

const middleWare = express.json();
app.use(middleWare);

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  const indexOfStudent = grades.map(student => {
    if (student.id === req.params.id) {
      grades.indexOf(student.id);
    }
  });
  grades.splice(indexOfStudent, 1);
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to Port 3000!');
});
