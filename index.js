const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/', (request, response) => {
    response.json({ hello: 'world' });
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));