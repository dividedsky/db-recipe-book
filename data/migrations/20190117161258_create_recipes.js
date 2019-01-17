exports.up = function (knex, Promise) {
  return knex.schema.createTable('recipes', (tbl) => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.unique('name', 'uq_recipe_name');
    tbl.text('instructions');
    tbl.integer('dish_id').notNullable();
    tbl.foreign('dish_id').references('id').inTable('dishes');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
