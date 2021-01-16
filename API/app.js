const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('../db')

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
  next();
});

app.get('/list', (req, res, next) => {
  db.query('SELECT * FROM spending WHERE accountid = $1', [3], (err, resp) => {
    if (err) {
      return next(err)
    }
    res.send(resp.rows)
  })
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})