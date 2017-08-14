const connection = require('../config/connection');

exports.getAll = function() {
  return new Promise(function(resolve, reject) {
    connection.execute('SELECT * FROM burgers', function(err, results) {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

exports.addOne = function(body) {
  return new Promise(function(resolve, reject) {
    connection.execute(
      'INSERT INTO burgers (burger, devoured) VALUES (?, false)',
      [body.burger],
      function(err, results) {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};

exports.updateOne = function(body) {
  return new Promise(function(resolve, reject) {
    connection.execute(
      'UPDATE burgers SET devoured=1 WHERE id=?',
      [body.burger],
      function(err, results) {
        if (err) return reject(err);
        resolve(results);
      }
    );
  });
};
