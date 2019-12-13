const {
  getAllSitters,
  querySitters,
  addSitter,
} = require('../db/models/sitters.model');

describe('Sitters Model', () => {
  it('#getAllSitters', async () => {
    const allSitters = await getAllSitters();

    expect(allSitters.length).toBe(3);
  });

  it('#querySitters', async () => {
    const jls = await querySitters({
      preferred_pet: 'rufus',
    });
    expect(jls[0].name).toBe('jls');
  });

  it('#addSitter', async () => {
    const id = await addSitter({
      name: 'katy',
      preferred_pet: 'Obie',
    });
    const katy = await querySitters({ name: 'katy' });
    expect(typeof id).toBe('number');
    expect(Array.isArray(katy)).toBe(true);
    expect(katy[0].preferred_pet).toBe('Obie');
  });

  it.skip('#updateSitter', async () => {});
});
