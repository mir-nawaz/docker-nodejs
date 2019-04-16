'use strict';

const express = require('express');
const app = express();
const log = require ('./log.js');

app.get('/', function (req, res) {
  log.info('Hello World!' +process.pid);
  res.send('Hello World! '+process.pid)
});

app.listen(3000, function () {
  log.info('app listening on port 3000!');
  console.log('app listening on port 3000!');
});