// const { getAllSitters, querySittersByX } = require('../db/sitters.model');

describe.skip('Sitters Model', () => {
  it('#getAllSitters', async () => {
    const allSitters = await getAllSitters();

    expect(allSitters.length).toBe(3);
  });

  it('#querySittersByX', async () => {
    const cats = await querySittersByX({ name: 'lorenzo' });

    expect(cats.length).toBe(4);
  });
});
