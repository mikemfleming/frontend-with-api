const db = require('knex')({
    client: 'pg',
    connection: { database: 'my_app' }
});

module.exports = db;