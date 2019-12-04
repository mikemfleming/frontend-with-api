const {
  getAllPets,
  queryPetsByX,
  addPet,
  updatePet,
  deletePet,
} = require('../db/models/pets.model');

describe('Pets Model', () => {
  it('#getAllPets', async () => {
    const allPets = await getAllPets();

    expect(allPets.length).toBe(6);
  });

  it('#queryPetsByX', async () => {
    const cats = await queryPetsByX({ type: 'cat' });

    expect(cats.length).toBe(4);

    const dogs = await queryPetsByX({ type: 'dog' });

    expect(dogs.length).toBe(2);

    const oizo = await queryPetsByX({ name: 'oizo' });

    expect(oizo[0].name).toBe('oizo');
  });

  it('#addPet', async () => {
    await addPet({
      name: 'lassie',
      type: 'dog',
    });

    const lassie = await queryPetsByX({ name: 'lassie' });

    expect(Array.isArray(lassie)).toBe(true);
    expect(lassie[0].type).toBe('dog');
  });

  it('#updatePet', async () => {
    const id = await addPet({
      name: 'flipper',
      type: 'dolphin',
    });

    await updatePet({
      id,
      updates: {
        available: false,
      },
    });

    const flipper = await queryPetsByX({ id });

    expect(flipper[0].available).toBe(false);
  });

  it('#deletePet', async () => {
    const id = await addPet({
      name: 'benji',
      type: 'dog',
    });

    await deletePet(id);

    const queryResults = await queryPetsByX({ id });

    expect(queryResults.length).toBe(0);
  });
});
