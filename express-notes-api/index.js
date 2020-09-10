const express = require('express');
const dataJson = require('./data.json');
const app = express();

// clients can get a list of notes
// route /api/notes
// 200 response
// res.json(json object)
// require data.json auto parses

app.get('/api/notes', (req, res) => {
  res.json(dataJson);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000!');
});

// clients can get a single note by id
// route /api/notes/:id
// not positive integer -> 400 response with json object containing error property with problem
// 200 response json object representing the note with id, don't send out list
// 404 json obj with error of problem

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
