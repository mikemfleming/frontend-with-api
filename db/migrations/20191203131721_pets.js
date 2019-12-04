
exports.up = function(knex) {
    return knex.schema
        .createTable('pets', table => {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('type', 255).notNullable();
            table.boolean('available');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('pets');
};
