// set variables
const express = require('express');
const path = require('path');
const app = express();

// set middleware to use express
app.use(express.static(path.join(__dirname, 'public')));

// get request to serve up the html index page
app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// start the node server and run the site on 8080
app.listen(8080, () => {
    console.log("Node server is running on port 8080");
});