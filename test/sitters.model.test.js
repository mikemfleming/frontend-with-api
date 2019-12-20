const {
  getAllSitters,
  querySitters,
  addSitter,
  updateSitter,
  deletePet,
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

  it('#updateSitter', async () => {
    // add a sitter
    const id = await addSitter({
      name: 'cathy',
      preferred_pet: 'regalis',
    });

    // update sitter
    await updateSitter({
      id,
      updates: {
        preferred_pet: 'belle',
      },
    });

    // query sitter
    const cathy = await querySitters({ id });

    // assert update succeeded
    expect(Array.isArray(cathy)).toBe(true);
    expect(cathy[0].preferred_pet).toBe('belle');
  });

  it('#deleteSitter', async () => {
    const id = await addSitter({
      name: 'katy',
      preferred_pet: 'Obie',
    });

    await deletePet(id);

    const queryResults = await querySitters({ id });

    expect(queryResults.length).toBe(0);
  });
});
