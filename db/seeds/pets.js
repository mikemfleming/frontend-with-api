
exports.seed = function(knex) {
  const table_name = 'pets';
  // Deletes ALL existing entries
  return knex(table_name).del()
    .then(function () {
      const pets = [
        { name: 'tater', type: 'cat' },
        { name: 'ishtar', type: 'cat' },
        { name: 'olaf', type: 'cat' },
        { name: 'oizo', type: 'dog' },
        { name: 'ladybird', type: 'dog' },
        { name: 'rufus', type: 'cat' }
      ]
      // Inserts seed entries
      return knex(table_name).insert(
        pets.map(pet => ({
          ...pet,
          available: true
        }))
      );
    });
};
