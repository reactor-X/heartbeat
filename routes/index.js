var express = require('express');
var router = express.Router();
var appContainer = require('../config/app_container.js');
var db = appContainer.services.database;
var isLoggedIn = appContainer.services.authentication.isLoggedIn;
var appMessages = appContainer.config.string_table;

/* GET home page. */
router.get('/', function(req, res, next) {
    if (isLoggedIn(req.session)) {
        res.redirect('/dashboard');
    } else {
        var message = '';
        if (req.session.message !== null) {
            message = req.session.message;
        }
        res.render('index', {
            title: 'HeartBeat',
            message: message
        });
    }
});

//User login
router.post('/', function(req, res, next) {
    db.connect(appContainer.config.database_url, function() {
        var User = require('../model/User');
        User.findOne({
            $or: [{
                username: req.body.username
            }, {
                email: req.body.username
            }],
            'password': req.body.password
        }, function(err, user) {
            db.connection.close();
            if (err !== null) {
                req.session.message = appMessages.error.server_error_unknown;
                res.redirect('/');
            } else {
                if (user == null) {
                    req.session.message = appMessages.error.invalid_credentials;
                    res.redirect('/');
                } else {
                    req.session.user = user;
                    res.redirect('/dashboard');
                }
            }
        });
    });
});

/* GET dashboard */
router.get('/dashboard', function(req, res, next) {
    if (isLoggedIn(req.session)) {
        res.render('dashboard', {
            username: req.session.user.username,
            fname: req.session.user.fname,
            name: req.session.user.fname + " " + req.session.user.lname
        });
    } else {
        res.redirect('/');
    }
});

//User Signup
router.post('/signup', function(req, res, next) {
    db.connect(appContainer.config.database_url);
    var User = require('../model/User');
    var dummyUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    dummyUser.save(function(err, dummyUser) {
        if (err) return console.error(err);
        console.log('Saved successfully');
    });
    db.connection.close();

});

router.get('/logout', function(req, res, next) {
    delete req.user;
    req.session.reset();
    res.redirect('/');
});
module.exports = router;