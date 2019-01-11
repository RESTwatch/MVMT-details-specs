const path = require('path');
const { Pool, Client } = require('pg');
const config = require('./config.js');

const client = new Client(config.postgresConfig);
client.connect();

client.query('SELECT * FROM detail', (err, res) => {
  if (err) { throw err; }
  console.log(res);
  client.end()
});