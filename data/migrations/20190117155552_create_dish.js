exports.up = function (knex, Promise) {
  return knex.schema.createTable('dishes', (tbl) => {
    tbl.increments();
    tbl.string('name', 255).notNullable(); // can unique be chained here?
    tbl.unique('name', 'uq_dish_name');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
