var mongoose = require('mongoose');

var directory_schema = mongoose.Schema({
        name: String,
        logical_path: String,
        childs: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Directory'
        }]
});

module.exports = mongoose.model("Directory", directory_schema);