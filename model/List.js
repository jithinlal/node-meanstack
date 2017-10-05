var mongoose = require('mongoose');

//database for list 

var schema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: String
});

//list is a collection in our db to show the comments
module.exports = mongoose.model('List', schema);