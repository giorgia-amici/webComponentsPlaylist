'use strict';
const express = require('express');
const routes = require('./src/routes')
const bodyParser = require("body-parser");
const PORT = 8081;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// TODO - this doesn't handle the nulls it gets and throws errors
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
routes(app);
app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
