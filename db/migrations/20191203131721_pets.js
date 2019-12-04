
exports.up = (knex) => knex.schema
  .createTable('pets', (table) => {
    table.increments('id');
    table.string('name', 255).notNullable();
    table.string('type', 255).notNullable();
    table.boolean('available');
  });

exports.down = (knex) => knex.schema
  .dropTable('pets');
