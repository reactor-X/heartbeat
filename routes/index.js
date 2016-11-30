var express = require('express');
var router = express.Router();
var appContainer= require('../config/app_container.js');
var db=appContainer.services.database;
//Code to insert into database



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HeartBeat',message: ''});
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
module.exports = router;

