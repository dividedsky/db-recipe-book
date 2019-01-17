exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').truncate()
    .then(() => knex('dishes').insert([
      { name: 'tacos' },
      { name: 'pizza' },
      { name: 'hamburgers' },
      { name: 'hot dogs' },
      { name: 'ramen' },
      { name: 'chicken' },
      { name: 'chicken soup' },
    ]));
};
