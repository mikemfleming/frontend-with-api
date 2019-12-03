const { getAllPets, queryPetsByX } = require('../db/models/pets.model');

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
});
