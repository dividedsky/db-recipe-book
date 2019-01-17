exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipesIngredients', (tbl) => {
    tbl.integer('recipe_id');
    tbl.integer('ingredient_id');
    tbl.primary(['recipe_id', 'ingredient_id']);
    tbl.float('ingredient_qty');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('recipesIngredients');
};
