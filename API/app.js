const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('../db')
const jwt = require('jsonwebtoken');

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

  app.post('/spending', (req, res, next) => {
    let token = req.body.token;
    jwt.verify(token, "qwe1234", (err, decoded) => {
      if (err) {
          res.status(401).send(err);
      } else {
          id = decoded.subject;
          db.query('SELECT * FROM spending WHERE accountid = $1', [id], (err, resp) => {
            if (err) {
              return next(err)
            }
            res.send(resp.rows)
          })
      } 
    });
  });

  app.post('/spending/overall', (req, res, next) => {
    let token = req.body.token;
    console.log(1)
    jwt.verify(token, "qwe1234", (err, decoded) => {
      if (err) {
          res.status(401).send(err);
      } else {
          id = decoded.subject;
          db.query('SELECT SUM(amount) FROM spending WHERE accountid = $1', [id], (err, resp) => {
            if (err) {
              return next(err)
            }
            console.log(resp.rows)
            res.send(resp.rows)
          })
      } 
    });
  });

app.delete('/spending/:position', (req, res) => {
  db.query('DELETE FROM spending WHERE position = $1', [req.params.position], (err, resp) => {
    if (err) {
      res.sendStatus(500).send(next(err))
    }
    res.status(200).send({ status: 'OK' });
  })
});

app.post('/spending/add', (req, res) => {
  const accountid =id;
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

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username == null || password == null) {
    return res.status(500).send("Wrong body")
  }

  // Check if user already exists
  db.query('SELECT 1 FROM account WHERE username = $1', [username], (err, resp) => {
    if (err) {
      return res.status(500).send(err)
    }

    if (resp.rows && resp.rows.length > 0) {
      return res.status(403).send("User already exists")
    } else {
      // User don't exists, insert into database
      db.query('INSERT INTO account(username, password) VALUES($1, $2) RETURNING accountid', [username, password], (err, resp) => {
        if (err) {
          return res.status(500).send(err)
        }
        console.log("Register successful")
        let payload = resp.rows[0].accountid
        let token = jwt.sign(payload, "qwe1234")
        res.status(200).header('x-access-token', token).send({ token })
      })
    }
  })
});


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
})
