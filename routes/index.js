var express = require('express');
var router = express.Router();
var appContainer= require('../config/app_container.js');
var db=appContainer.services.database;

//Code to insert into database



/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.user);
  if (req.session && req.session.user){
	 	res.render('dashboard',{username:req.session.user.username,fname:req.session.user.fname,name:req.session.user.fname+ " " +req.session.user.lname});
  }
  else {
	 	res.render('index', { title: 'HeartBeat',message: ''});
  }
});

//User login
router.post('/', function(req, res, next) {
	 db.connect(appContainer.config.database_url,function(){
	 	var User=require('../model/User');
	 User.findOne({ $or: [ { username: req.body.username }, { email: req.body.username } ],'password':req.body.password } ,function (err,user){
	 	db.connection.close();
	 	if (err!==null)
	 		{
	 			res.render('index', { title: 'HeartBeat',message: 'Something happened on our end. Please try again later.'});
	 		}
	 	else {
	 		 if (user==null){
	 		 	res.render('index', { title: 'HeartBeat',message: 'Invalid Username or password.'});
	 		 }
	 		 else {
	 		 	req.session.user=user;
	 		 	res.render('dashboard',{username:user.username,fname:user.fname,name:user.fname+ " " +user.lname});
	 		}
	 	}
	 });
	 });
  });

//User Signup
router.post('/signup', function(req, res, next) {
	 db.connect(appContainer.config.database_url);
    var User=require('../model/User');
    var dummyUser=new User({fname:req.body.fname,lname:req.body.lname,email:req.body.email,username:req.body.username,password:req.body.password});
    dummyUser.save(function (err, dummyUser) {
    if (err) return console.error(err);
     	console.log('Saved successfully');
    });
    db.connection.close();	

  });

router.get('/logout',function (req,res,next){
	delete req.user;
	req.session.reset();
	res.redirect('/');
});
module.exports = router;

