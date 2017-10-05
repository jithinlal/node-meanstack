var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var http = require('http');

var session = require('client-sessions');
var bodyparser = require('body-parser');
var local = require('passport-local').Strategy;
mongoose.Promise = Promise;

var connectDB = require('./model/Database');

var user = require('./routes/user'); // routes of our node server

//body parser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//session
app.use(session({
    cookieName: 'session',
    secret: 'hellomysweetlove',
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000
}));

//passport for authentication
app.use(passport.initialize());
app.use(passport.session());


var User = require('./model/User');
var List = require('./model/List');

//database for user registration and login
mongoose.connect(connectDB.url, {
    useMongoClient: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error : '));

passport.use(new local(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/user', user);
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const server = http.createServer(app);
const port = process.env.PORT || '3002';
server.listen(port, function() {
    console.log('Server running on : ', port);
});