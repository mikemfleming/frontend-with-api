const app = require('express')();

app.get('/', (req, res) => res.json({ ok: 1 }));

app.listen(1337, () => console.log('lisnen'));
