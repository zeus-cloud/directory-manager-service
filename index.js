var port = process.argv[2];

var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var user = require('./routes/user');
var user_directory = require('./routes/user_directory');

mongoose.connect('mongodb://10.30.129.174:27017/zeus', {useNewUrlParser:true, useUnifiedTopology: true });

var app = express();
app.use(body_parser.json());
app.use('/user', user);
app.use('/user/directory', user_directory);


app.listen(port, function() {
    console.log('listening on port ' + port);
});
