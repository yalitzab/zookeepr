const express = require('express');

const app = express();

// route so front-end can request data from
const { animals } = require('./data/animals');

// route
app.get('/api/animals', (req, res) => {
    res.send('Hello');
});


app.listen(3001, () => {
    console.log(`API server now port 3001!`);
});




