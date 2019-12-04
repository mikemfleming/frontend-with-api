
exports.seed = (knex) => {
  const tableName = 'pets';
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(() => {
      const pets = [
        { name: 'tater', type: 'cat' },
        { name: 'ishtar', type: 'cat' },
        { name: 'olaf', type: 'cat' },
        { name: 'oizo', type: 'dog' },
        { name: 'ladybird', type: 'dog' },
        { name: 'rufus', type: 'cat' },
      ];
      // Inserts seed entries
      return knex(tableName).insert(
        pets.map((pet) => ({
          ...pet,
          available: true,
        })),
      );
    });
};
