// const { getAllSitters } = require('../db/models/sitters.model');

describe.skip('Sitters Model', () => {
  it('#getAllSitters', async () => {
    const allSitters = await getAllSitters();

    expect(allSitters.length).toBe(3);
  });
});
