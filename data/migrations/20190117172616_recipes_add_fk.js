exports.up = function (knex, Promise) {
  return knex.schema.table('recipes', (tbl) => {
    tbl.foreign('id').references('recipe_id').inTable('recipesIngredients');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.table('recipes', (tbl) => {
    tbl.dropForeign('id');
  });
};
