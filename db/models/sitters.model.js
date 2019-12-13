const db = require('..');

const tableName = 'sitters';

exports.getAllSitters = () => db.select().table(tableName);

exports.querySitters = (query) => db(tableName).where(query);

exports.addSitter = (sitter) => db(tableName)
  .insert(sitter)
  .returning('id')
  .then((data) => data[0]);
