
describe('Pets Model', () => {
    const { getAllPets, queryPetsByX } = require('../db/models/pets.model');

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
});

describe.skip('Sitters Model', () => {
    const { getAllSitters, querySittersByX } = require('../db/sitters.model');

    it('#getAllSitters', async () => {
        const allSitters = await getAllSitters();

        expect(allSitters.length).toBe(3);
    });

    it('#querySittersByX', async () => {
        const cats = await querySittersByX({ name: 'lorenzo' });

        expect(cats.length).toBe(4);
    });
});
