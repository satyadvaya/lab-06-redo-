const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const {mungeLocation } = require('./utils.js');
const locationData = require('./data/geo.json');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/location', (request, response) => {
    const mungeData = mungeLocation(locationData);

    response.json(mungeData);
});

app.get('/weather', (request, response) => {
    console.log('you hit the weather route');
    response.json([
        {
            'forecast': 'Partly cloudy until afternoon.',
            'time': 'Mon Jan 01 2001'
        },
        {
            'forecast': 'Mostly cloudy in the morning.',
            'time': 'Tue Jan 02 2001'
        },
    ]);
});

// app.get('/', (request, response) => {
//     response.json({ hello: 'world' });
// });

app.listen(PORT, () => console.log(`running on port ${PORT}`));