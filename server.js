/**
 * Created by smael on 23/04/2017.
 */

//Get dependencies

var express = require('express'),
    path = require('path'),
    body_parser = require('body-parser'),
    app = express();

app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

app.listen(3000);

console.log('App is running on http://localhost:3000');
