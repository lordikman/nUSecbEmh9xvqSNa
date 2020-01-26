const Knex = require('knex');
const axios = require('axios');
const knexOptions = require('./knexfile');

const knex = Knex(knexOptions);


async function main() {
  const { rows } = await knex.raw('select 1 + 1 as sum');
  const { data } = await axios('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airlines.dat');
  const lines = data
    .replace(/"/g, '')
    .split('\n')
    .slice(1)
    .map((s) => s.split(','))
    .map(([id, name, alias, iata, icao, call_sign, country, active]) => ({
      id: parseInt(id, 10),
      name,
      alias,
      iata,
      icao,
      call_sign,
      country,
      active: active === 'Y',
    }))
    .filter((record) => record.id);


  await knex('main').del();

  const result = await knex.batchInsert('main', lines);
  let sum = 0;
  
  result.forEach((r) => {
    sum += r.rowCount;
  });

  console.log(`rows inserted, ${sum}`);

}

main();

