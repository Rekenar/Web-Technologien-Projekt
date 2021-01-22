const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('../db')
const jwt = require('jsonwebtoken');
const LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

  res.header(
      'Access-Control-Expose-Headers',
      'x-access-token, x-refresh-token'
  );

  next();
});

let id;
let authenticate = (req, res, next) => {
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJpYXQiOjE2MTEzMzE0NTl9.1V-jD-7MkFsydusyp0JiQyO3JNVzUO5q26MsVDFqz6E";
  console.log()
  // verify the JWT
  jwt.verify(token, "qwe1234", (err, decoded) => {
      if (err) {
          // there was an error
          // jwt is invalid - * DO NOT AUTHENTICATE *
          res.status(401).send(err);
      } else {
          // jwt is valid
          console.log(decoded.subject)
          id = decoded.subject;
          next();
      }
  });
}

app.get('/spending', authenticate, (req, res, next) => {
  db.query('SELECT * FROM spending WHERE accountid = $1', [id], (err, resp) => {
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

app.post("/account", (req, res) => {
  db.query("SELECT * FROM account WHERE username = $1", [req.body.username], (err, resp) =>{
    if(err) {
      return next(err)
    }
    try {
      if(resp.rows[0].password == req.body.password){
        console.log("Login successful")
        let payload = {subject:resp.rows[0].accountid}
        let payloadid = resp.rows[0].accountid
        let token = jwt.sign(payload, "qwe1234")
        res.status(200).header('x-access-token',token).send({token})
  
      }
      else{
        return res.send(false)
      }
    } catch (error) {
      console.log("Invalid")
    }

  })
})


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})