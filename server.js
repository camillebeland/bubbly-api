var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var fountains = require('./routes/fountains');
var corsOptions = {
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE']
};

var app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/fountains', fountains.getAllFountains);
app.post('/fountain', fountains.createFountain);
app.delete('/fountains', fountains.deleteFountains);

var port = process.env.PORT || 5000;
app.listen(port);
