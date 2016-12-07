var express = require('express');
var router = express.Router();
var appContainer = require('../config/app_container.js');
var db = appContainer.services.database;
var isLoggedIn = appContainer.services.authentication.isLoggedIn;
var appMessages = appContainer.config.string_table;
var operatingSystem = require('../services/os/operating_system.js');
ss;l;
var ubuntu_terminal=operatingSystem.terminal.ubuntu;
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
                    req.session.user={'fname':user.fname,'lname':user.lname,'username':user.username,};
                    res.redirect('/dashboard');
                }
            }
        });
    });
});

/* GET dashboard echo "ragingblast" | sudo -S apt-get upgrade*/
router.get('/dashboard', function(req, res, next) {
    if (isLoggedIn(req.session)) {
        ubuntu_terminal.executeCommand('lsb_release -a',function (error,stderror,stdout){
            res.render('dashboard', {
            username: req.session.user.username,
            fname: req.session.user.fname,
            name: req.session.user.fname + " " + req.session.user.lname,
            server_information: stderror!==null?stdout.replace(/\n/g,'<br>'):stdout.replace(/\n/g,'<br>'),
        });
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

// router.post('/commander',function (req,res,next){

// });
module.exports = router;
