const express = require('express');
const app = express();
const pg = require('pg');
const parseJson = express.json();
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.use(parseJson);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/grades', (req, res, next) => {
  const sql =
    `select *
  from "grades"`;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const newGrade = req.body;
  if (!Number.isInteger(newGrade.grade) ||
    typeof newGrade.name !== 'string' ||
    typeof newGrade.course !== 'string') {
    res.status(400).json({
      error: 'content requirement is not met, gradeId must be a positive integer, name and course must be text'
    });
    return;
  }
  const sql = `
  insert into "grades" ("name","course","grade")
  values($1,$2,$3)
  returning *`;

  const params = [newGrade.name, newGrade.course, newGrade.grade];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const updatedGrade = req.body;
  if (!Number.isInteger(gradeId) || gradeId <= 0 ||
    typeof updatedGrade.name !== 'string' || typeof updatedGrade.course !== 'string') {
    res.status(400).json({
      error: 'content requirement is not met, gradeId must be a positive integer, name and course must be text'
    });
    return;
  }
  const sql = `
  update "grades"
  set
  "name" = $2,
  "course" = $3,
  "grade" = $4
  where "gradeId" = $1
  returning *
  `;
  const params = [gradeId, updatedGrade.name, updatedGrade.course, updatedGrade.grade];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId)) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
  }

  const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.status(204).json(params);
      }
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error ocurred'
      });
    });
});
