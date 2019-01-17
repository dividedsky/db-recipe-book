exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(() => knex('recipes').insert([
      {
        name: 'spicy tacos', instructions: 'heat and serve', dish_id: 1,
      },
      {
        name: 'pepperoni pizza', instructions: 'just eat it', dish_id: 2,
      },
      {
        name: 'broiled chicken', instructions: 'just broil it', dish_id: 6,
      },
      {
        name: 'spicy chicken', instructions: 'it hot! be careful', dish_id: 6,
      },
      {
        name: 'boiled hot dogs', instructions: 'that is gross, throw it away', dish_id: 4,
      },
    ]));
};
