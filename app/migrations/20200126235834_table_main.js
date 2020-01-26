
exports.up = knex => knex.schema
  .createTable('main', (table) => {
    table.increments();
    table.string('name');
    table.string('alias');
    table.string('iata');
    table.string('icao');
    table.string('call_sign');
    table.string('country');
    table.boolean('active');
  });

exports.down = (knex) => knex.schema
  .dropTable('main');
