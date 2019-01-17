const express = require('express');
const db = require('../config/dbConfig');

const dishHelper = require('../data/helpers/dishesHelper');

const server = express();
server.get('/', (req, res) => {
  res.status(200).send('sanity check!!!');
});

server.get('/dishes', (req, res) => {
  dishHelper.getDishes()
    .then((dishes) => {
      res.status(200).json(dishes);
    });
});

module.exports = server;
