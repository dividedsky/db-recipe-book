const db = require('../../config/dbConfig');

module.exports = {
  getDishes: () => db('dishes'),

  getDish: id => db('dishes')
    .where({ id }),

  addDish: dish => db('dishes')
    .insert(dish),

  getRecipes: () => db('recipes'),
};
