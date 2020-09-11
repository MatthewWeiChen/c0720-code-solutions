const express = require('express');
const dataJson = require('./data.json');
const app = express();
const parseJson = express.json();
const fs = require('fs');

app.use(parseJson);

app.get('/api/notes', (req, res) => {
  res.json(dataJson);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (req.params.id < 0) {
    res.status(400);
    res.json({
      error: 'id must be a postive integer'
    });
  } else if (dataJson.notes[id]) {
    res.json(dataJson.notes[id]);
  } else {
    res.status(404);
    res.json({
      error: `cannot find note with id ${req.params.id}`
    });
  }

});

app.post('/api/notes', (req, res) => {

  if (Object.keys(req.body).length === 0) {
    res.status(400);
    res.json({
      error: 'content is a required field'
    });
  } else {
    dataJson.notes[`${dataJson.nextId}`] = {
      id: `${dataJson.nextId}`,
      content: Object.values(req.body).toString()
    };
    dataJson.nextId++;
    fs.writeFile('derp/data.json', JSON.stringify(dataJson), err => {
      if (err) {
        res.status(500).json({
          error: 'An unexpected error has occured'
        });
      } else {
        res.status(201).json(dataJson.notes[`${dataJson.nextId}`]);
      }
    });
  }

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
