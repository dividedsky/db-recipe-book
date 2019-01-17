const db = require('../../config/dbConfig');

module.exports = {
  getDishes: () => db('dishes')
    .then(list => list)
    .catch(err => (err)),
};
