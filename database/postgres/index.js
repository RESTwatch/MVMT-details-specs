const path = require('path');
const { Pool, Client } = require('pg');
const config = require('./config.js');

const client = new Client(config.postgresConfig);
client.connect();

const getSpecsForId = (id, cb) => {
  client.query(`SELECT * FROM Detail WHERE id=${id}`, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res);
    }
  });
};

// client.query('SELECT * FROM detail', (err, res) => {
//   if (err) { throw err; }
//   console.log(res);
//   client.end()
// });

module.exports.getSpecsForId = getSpecsForId;