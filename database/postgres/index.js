const path = require('path');
const { Pool, Client } = require('pg');
const config = require('./config.js');
const { writeRedis, readRedis } = require('../redis/index.js');

const client = new Client(config.postgresConfig);
client.connect();

const getSpecsForId = (id, cb) => {
  if (id < 100 || id > 10000000) {
    cb('Please send a valid id from 100 to 10,000,000.');
  } else {
    readRedis(id, (err, res) => {
      if (err || res === null) {
        client.query(`SELECT * FROM Detail WHERE id=${id}`, (err, pgres) => {
          if (err) {
            cb(err);
          } else {
            writeRedis(pgres.rows[0], cb);
          }
        });
      } else {
        cb(null, res);
      }
    });
  }
};

module.exports.getSpecsForId = getSpecsForId;
