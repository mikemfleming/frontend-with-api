const db = require('../db');
const path = require('path');

const dbPath = path.join(__dirname, '../db');

module.exports = async () => {
    await db.migrate.rollback({ directory: dbPath + '/migrations' }, true);
}
