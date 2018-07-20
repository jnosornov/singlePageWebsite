var path = require('path');
var express = require('express');

var publicPath = path.join(__dirname + './../public');
var app = express();

// > middleware to serve static files
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log('Project is running on port 3000');
});