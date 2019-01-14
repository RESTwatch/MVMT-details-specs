const path = require('path');
const { Pool, Client } = require('pg');
const config = require('../database/postgres/config.js');

const client = new Client(config.postgresConfig);
client.connect();

client.query(`CREATE TABLE Detail(
  id integer PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  uniqueName VARCHAR(50) NOT NULL,
  series VARCHAR(50) NOT NULL,
  main_photo VARCHAR(100) NOT NULL,
  fit_photo VARCHAR(100) NOT NULL,
  case_size integer NOT NULL,
  case_thickness integer NOT NULL,
  strap_width integer NOT NULL,
  movement VARCHAR(70) NOT NULL,
  glass VARCHAR(50) NOT NULL,
  water_resistance integer NOT NULL,
  case_description VARCHAR(50) NOT NULL,
  dial VARCHAR(50) NOT NULL,
  dial_details VARCHAR(50) NOT NULL,
  strap VARCHAR(50) NOT NULL,
  interchangeable_strap VARCHAR(50) NOT NULL,
  subdials VARCHAR(70) NOT NULL
);`, (err) => {
    if (err) { throw err; }
    console.log('Sucessfully created Detail table!');
  });

for (let i = 1; i < 12; i += 1) {
  client.query(`COPY Detail (id, name, uniqueName, series, main_photo, fit_photo, case_size, case_thickness, strap_width, movement, glass, water_resistance, case_description, dial, dial_details, strap, interchangeable_strap, subdials) FROM '/Users/rudydimacali/Documents/GitHub/RESTwatch-SDC/MVMT-details-specs/data_generation/seedData${i}.csv' DELIMITER ',' ESCAPE '\\' QUOTE  '''' CSV HEADER;`, (err) => {
    if (err) { throw err; }
    console.log(`Sucessfully imported record ${i}!`);
    if (i === 11) {
      client.end();
    }
  });
}
