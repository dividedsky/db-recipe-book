const express = require('express');
const db = require('../config/dbConfig');

const dishHelper = require('../data/helpers/dishesHelper');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).send('sanity check!!!');
});

server.get('/dishes', (req, res) => {
  dishHelper.getDishes()
    .then((dishes) => {
      res.status(200).json(dishes);
    })
    .catch((err) => {
      res.status(500).json({ error: `there was an error retrieving the dishes: ${err}` });
    });
});

server.get('/dishes/:id', (req, res) => {
  dishHelper.getDish(req.params.id)
    .then((dish) => {
      if (dish.length) {
        res.status(200).json(dish);
      } else {
        res.status(400).json({ error: 'there is no dish with that id' });
      }
    })
    .catch((err) => {
      res.status(500).json(`there was an error retrieving the dish: ${err}`);
    });
});

server.post('/dishes', (req, res) => {
  if (!req.body.name || Object.keys(req.body).length !== 1) {
    res.status(400).json({ error: 'the dish must have only a name field' });
  } else {
    dishHelper.addDish(req.body)
      .then((id) => {
        // use id to retrieve dish and return it
        dishHelper.getDish(id[0])
          .then((dish) => {
            res.status(200).json(dish);
          })
          .catch((err) => {
            res.status(500).json({ error: `idk how you got here. well done: ${err}` });
          });
      })
      .catch((err) => {
        res.status(500).json({ error: `there was an error adding the dish: ${err}` });
      });
  }
});

module.exports = server;
