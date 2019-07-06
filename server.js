const express = require('express');
const app = express();
const path = require('path');

app.use('/build', express.static(path.resolve(__dirname, './build')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './build/index.html'));
});

app.get('/instagram', (req, res) => {
    fetch('https://www.instagram.com/explore/tags/kiev/?__a=1')
    .then(function(response){
        console.log(response.body)
    })
})

app.listen(3000);