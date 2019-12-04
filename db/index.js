const config = require('../config/db.config');

// eslint-disable-next-line import/order
const db = require('knex')(config);

module.exports = db;
