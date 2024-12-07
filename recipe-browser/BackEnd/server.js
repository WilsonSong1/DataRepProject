const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/browse', (req, res) => {
    res.send('Home Page');
});

app.get('/post', (req, res) => {
    res.send('Home Page');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});