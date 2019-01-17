const db = require('../../config/dbConfig');

module.exports = {
  getDishes: () => {
    db('dishes')
      .then(dishes => dishes)
      .catch(err => (err));
  },
};
