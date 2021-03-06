const express = require('express');
const dataJson = require('./data.json');
const app = express();
const parseJson = express.json();
const fs = require('fs');
let notes = [];

app.use(parseJson);

app.get('/api/notes', (req, res) => {
  notes = [];
  for (const id in dataJson.notes) {
    const note = dataJson.notes[id];
    notes.push(note);
  }
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (req.params.id < 0 || isNaN(req.params.id)) {
    res.status(400);
    res.json({
      error: 'id must be a postive integer'
    });
    return;
  }

  if (dataJson.notes[id]) {
    res.json(dataJson.notes[id]);
    return;
  }
  res.status(404);
  res.json({
    error: `cannot find note with id ${id}`
  });
});

app.post('/api/notes', (req, res) => {
  const jsonBody = req.body;

  if (req.body.content === undefined) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }

  jsonBody.id = dataJson.nextId;
  dataJson.notes[dataJson.nextId] = req.body;
  dataJson.nextId++;

  fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) {
      res.status(500).json({
        error: 'An unexpected error has occured'
      });
      return;
    }
    res.status(201).json(jsonBody);
  });

});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (id < 0 || isNaN(req.params.id)) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
    return;
  }

  if (dataJson.notes[id] === undefined) {
    res.status(404).json({
      error: `cannot find note with id ${req.params.id}`
    });
    return;
  }

  delete dataJson.notes[id];
  fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) {
      res.status(500).json({
        error: 'An unexpected error has occured'
      });
      return;
    }
    res.status(204).send();
  });

});

app.put('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const jsonBody = req.body;

  if (id < 0 || isNaN(req.params.id)) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
    return;
  }

  if (req.body.content === undefined) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }

  if (dataJson.notes[id] === undefined) {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
    return;
  }

  jsonBody.id = id;
  dataJson.notes[id] = jsonBody;

  fs.writeFile('data.json', JSON.stringify(dataJson, null, 2), err => {
    if (err) {
      res.status(500).json({
        error: 'An unexpected error has occured'
      });
      return;
    }
    res.status(200).json(jsonBody);
  });

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});
