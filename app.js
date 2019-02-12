const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.use(express.static('node_modules'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(8080, () => {
    console.log('App listening on port 8080');
});