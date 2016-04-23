var http = require('http');
var express = require('express');
var bodyParser = require('body-parser')
var fountain = require('./routes/fountain');
var mongojs = require("mongojs");

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

var app = express();
app.use(bodyParser.json());
app.use(allowCrossDomain);

var databaseUrl = "test";
var db = mongojs(databaseUrl);
var fountains = db.collection('fountains')

app.get('/fountains', function(request, response) {
  fountains.find({}, { _id: 0 }).toArray(function (err, array) {
      res.send(array);
  })
});

app.post('/addfountain', function(request, response) {
  fountains.save(req.body, function(err, result){
      res.send(
          (err === null) ? { msg: '' } : { msg: err }
      );
  });
});

app.post('/updatefountain', function(request, response) {
  fountains.update({name : req.body.name}, req.body, function(err, result){
      res.send(
          (err === null) ? { msg: '' } : { msg: err }
      );
  });
});

app.post('/removefountain', function(request, response) {
  fountains.remove({name : req.body.name}, function(err, result){
      res.send(
          (err === null) ? { msg: '' } : { msg: err }
      );
  });
});

app.listen(8080);
