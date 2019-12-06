exports.seed = (knex) => knex('sitters')
  .del()
  .then(() => knex('sitters').insert([
    {
      name: 'kim c',
      preferred_pet: 'regalis',
    },
    {
      name: 'mike f',
      preferred_pet: 'belle',
    },
    {
      name: 'jls',
      preferred_pet: 'rufus',
    },
  ]));
