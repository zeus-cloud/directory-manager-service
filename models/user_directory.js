var mongoose = require('mongoose');

var user_directory_schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    directory: Array,
    shared: Array
});

module.exports = mongoose.model("UserDirectory", user_directory_schema);