exports.up = (knex) => knex.schema.createTable('sitters', (table) => {
  table.increments('id');
  table.string('name', 255).notNullable();
  table.string('avatar_url');
  table.string('preferred_pet');
});

exports.down = (knex) => knex.schema.dropTable('sitters');
