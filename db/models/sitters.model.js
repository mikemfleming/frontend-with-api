const db = require('..');

const tableName = 'sitters';

exports.getAllSitters = () => db.select().table(tableName);

exports.querySitters = (query) => db(tableName).where(query);

exports.addSitter = (sitter) => db(tableName)
  .insert(sitter)
  .returning('id')
  .then((data) => data[0]);

exports.updateSitter = ({ id, updates }) => db(tableName)
  .update(updates)
  .where({ id })
  .returning('id')
  .then((data) => data[0]);

exports.deletePet = (id) => db(tableName)
  .delete()
  .where({ id });
