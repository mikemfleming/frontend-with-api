const db = require('../../db');

const tableName = 'pets';

exports.getAllPets = () => db.select().table(tableName);

exports.queryPetsByX = (query) => db(tableName).where(query);

exports.addPet = (pet) => db(tableName)
  .insert(pet)
  .returning('id')
  .then((data) => data[0]);

exports.updatePet = ({ id, updates }) => db(tableName)
  .update(updates)
  .where({ id })
  .returning('id')
  .then((data) => data[0]);

exports.deletePet = (id) => db(tableName)
  .delete()
  .where({ id });
