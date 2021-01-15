const express = require('express');
const app = express();
const bodyParser = require('body-parser')

let list = [{
    position: 1,
    name: "sandwich",
    amount: 4,
    type: "food",
    date: "20.02.2020"
  },{
    position: 2,
    name: "burger",
    amount: 2,
    type: "food",
    date: "21.02.2020"
  }]

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader("Access-Control-Allow-Credentials", "true");
		res.setHeader("Access-Control-Max-Age", "1800");
		res.setHeader("Access-Control-Allow-Headers", "content-type");
		res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
    next();
});

app.get('/list', (req, res) => {
    res.send(list);
})

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
})