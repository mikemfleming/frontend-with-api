
describe('Pets Model', () => {
    const { getAllPets, queryPetsByX, addPet } = require('../db/models/pets.model');

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
            type: 'dog'
        });

        const lassie = await queryPetsByX({ name: 'lassie' });

        expect(Array.isArray(lassie)).toBe(true);
        expect(lassie[0].type).toBe('dog');
    });
});
