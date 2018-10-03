const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

var path = require('path');
var http = require("http");
var url = require("url");
var cors = require("cors");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(path.join(__dirname, '../')));

app.options('*', cors()); 


// url: http://localhost:3000/
app.get('/', (request, response) => 
response.json([
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    }]));
    // url: http://localhost:3000/
app.get('/empty', (request, response) => 
response.json([]));

app.get('/erorr', (request, response) => 
response.send([
    {
        erorr: "erorr from site"
    }
]));

// all routes prefixed with /api

app.listen(port, () => console.log(`Listening on port ${port}`));