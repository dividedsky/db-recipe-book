const db = require('../../config/dbConfig');

module.exports = {
  getDishes: () => db('dishes'),

  getDish: id => db('dishes')
    .where({ id }),

  addDish: dish => db('dishes')
    .insert(dish),

  getRecipes: () => db('recipes')
    .join('dishes', 'recipes.dish_id', 'dishes.id')
    .select('recipes.name as recipe', 'dishes.name as dish'),

  addRecipe: recipe => db('recipes').insert(recipe),
};
