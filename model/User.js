var mongoose = require('mongoose');
var passportlocal = require('passport-local-mongoose');

var schema = mongoose.Schema({
    username: String,
    password: String
});

//authentication purpose that hashes the password automatically
schema.plugin(passportlocal);
//User is a collection in our database
module.exports = mongoose.model('User', schema);