const fetch = require('node-fetch');
const { PORT } = require('../config/server.config');

const serverHost = `http://localhost:${PORT}`;

describe.skip('Pets Controller', () => {
  it('GETs all pets', async () => {
    const response = await fetch(`${serverHost}/api/pets`).then((res) => res.json());

    // this route should return an array of all pets
    expect(Array.isArray(response.data)).toBe(true);
  });
});
