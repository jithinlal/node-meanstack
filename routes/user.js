var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../model/User');
var List = require('../model/List');

// check if a user is authenticated or not
// according this components are redirected in the angular side
router.get('/auth', function(req, res, next) {
    if (req.session && req.session.user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// login authentication
router.post('/', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        } else if (!user) {
            console.log('user not registered!');
            return res.json({ success: false });
        } else {
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                } else {
                    req.session.user = user;
                    console.log('logged in');
                    return res.json({ success: true });
                }
            });
        }
    })(req, res, next);
});

// signup procedure
router.post('/signup', function(req, res, next) {
    User.register(new User({ username: req.body.username }), req.body.password, function(err) {
        if (err) {
            console.log('User already exists');
            res.json({ success: false });
        } else {
            console.log('signed in!');
            res.json({ success: true });
        }
    });
});

// add a message into the List collection
router.post('/post', function(req, res, next) {
    if (req.session && req.session.user) {
        var comment = new List({
            user: req.session.user._id,
            comment: req.body.comment
        });

        comment.save(function(err) {
            if (err) {
                res.json({ success: false });
                console.log('Error : not saved');
            } else {
                res.json({ success: true });
                console.log('comment saved');
            }
        });

    } else {
        res.json({ success: false });
    }

});

// posts all messages
router.get('/', function(req, res, next) {
    if (req.session && req.session.user) {

        List.find().populate('user').exec(function(err, lists) {
            if (err) {
                console.log('Error obtaining messages');
                return next(err);
            } else {
                console.log('messages obtained');
                res.json(lists);
            }
        });

    } else {
        res.json({ success: false });
    }

});

// logout a user by destroying his session credentials
router.get('/logout', function(req, res, next) {
    req.session.reset();
    res.json({ success: true });
});

// showing the individual messages of a person
router.get('/mine', function(req, res, next) {
    if (req.session && req.session.user) {
        List.find().populate('user').exec(function(err, lists) {
            if (err) {
                console.log('Error obtaining your messages');
                return next(err);
            } else {
                var msgs = [];
                for (var i = 0; i < lists.length; i++) {
                    if (lists[i].user.username === req.session.user.username) {
                        msgs.push(lists[i]);
                    }
                }
                console.log('your messages obtained');
                res.json(msgs);
            }
        });
    }
});

// delete a particular message 
// given the fact that a user can only delete
// his/her message but nothing else
router.delete('/:id', function(req, res, next) {
    if (req.session.user && req.session) {
        var id = req.params.id;
        List.findByIdAndRemove(id, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('comment deleted');
                res.json();
            }
        });
    }
});

// search for any particular message from the total list of messages
router.post('/search', function(req, res, next) {
    if (req.session.user && req.session) {
        var searchTerm = req.body.msg;
        List.find({ comment: { "$regex": searchTerm, "$options": "ix" } }, function(err, results) {
            if (err) {
                console.log(err);
            } else {
                console.log('search successful');
                res.json(results);
            }
        });
    }
});

module.exports = router;
