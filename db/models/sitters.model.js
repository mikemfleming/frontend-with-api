const db = require('..');

const tableName = 'sitters';

exports.getAllSitters = () => db.select().table(tableName);
