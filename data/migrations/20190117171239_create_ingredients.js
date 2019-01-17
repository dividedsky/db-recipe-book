exports.up = function (knex, Promise) {
  return knex.schema.createTable('ingredients', (tbl) => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
    tbl.unique('name', 'uq_ingredient_name');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('ingredients');
};
