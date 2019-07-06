const express = require('express');
const app = express();
const path = require('path');

app.use('/build', express.static(path.resolve(__dirname, './build')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/index.html'));
});
app.listen(3000);