const express = require('express');

const app = express();

app.get('/',function (req, res) {
    res.send('Simple web app is up and running');
});

app.listen(8081, function() {
    console.log('Simple web app running on port 8081!');
});