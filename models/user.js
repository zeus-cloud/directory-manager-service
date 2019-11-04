var mongoose = require('mongoose');

var user_schema = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('User', user_schema);