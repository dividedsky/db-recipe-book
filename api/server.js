const express = require('express');
const db = require('../config/dbConfig');

const helper = require('../data/helpers/dishesHelper');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).send('sanity check!!!');
});

server.get('/dishes', (req, res) => {
  helper.getDishes()
    .then((dishes) => {
      res.status(200).json(dishes);
    })
    .catch((err) => {
      res.status(500).json({ error: `there was an error retrieving the dishes: ${err}` });
    });
});

server.get('/dishes/:id', (req, res) => {
  helper.getDish(req.params.id)
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
    helper.addDish(req.body)
      .then((id) => {
        // use id to retrieve dish and return it
        helper.getDish(id[0])
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

server.get('/recipes', (req, res) => {
  helper.getRecipes()
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((err) => {
      res.status(500).json({ error: `there was an error retrieving the recipes: ${err}` });
    });
});

server.post('/recipes', (req, res) => {
  if (!req.body.name || !req.body.dish_id) {
    res.status(400).json({ error: 'the recipe must have a name and a dish_id' });
  } else {
    console.log(req.body);
    helper.addRecipe(req.body)
      .then((id) => {
        res.status(200).json(id);
      })
      .catch((err) => {
        res.status(500).json({ error: `there was an error adding the recipe: ${err}` });
      });
  }
});

module.exports = server;
