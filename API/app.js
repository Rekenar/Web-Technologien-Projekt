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

app.get('/spending', (req, res, next) => {
  db.query('SELECT * FROM spending WHERE accountid = $1', [3], (err, resp) => {
    if (err) {
      return next(err)
    }
    res.send(resp.rows)
  })
})

app.delete('/spending/:position', (req, res) => {
  db.query('DELETE FROM spending WHERE position = $1', [req.params.position], (err, resp) => {
    if (err) {
      res.sendStatus(500).send(next(err))
    }
    res.status(200).send({ status: 'OK' });
  })
});

app.post('/spending', (req, res) => {
  const accountid = req.body.accountid;
  const name = req.body.name;
  const amount = req.body.amount;
  const type = req.body.type;
  const date = req.body.date;
  if (accountid == null || name == null || amount == null || type == null || date == null) {
    res.sendStatus(500).send("Wrong body")
  }

  db.query('INSERT INTO spending(accountid, name, amount, type, date) VALUES($1, $2, $3, $4, $5)', [accountid, name, amount, type, date], (err, resp) => {
    if (err) {
      res.sendStatus(500).send(next(err))
    }
    res.status(200).send({ status: 'OK' });
  })
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})