const db = require('../db');

afterAll(() => db.destroy());
