const db = require('../../db');
const tableName = 'pets';

exports.getAllPets = () => db.select().table(tableName);

exports.queryPetsByX = query => db(tableName).where(query);