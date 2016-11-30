var express = require('express');
var router = express.Router();
var appContainer= require('../config/app_container.js');

 	 var db=appContainer.services.database;
 	 db.connect(appContainer.config.database_url);
 	 var User=require('../model/User');
 	 var dummyUser=new User({fname:'ion'});
 	 db.connection.close();	

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HeartBeat'});
});

router.post('/', function(req, res, next) {
  	 res.render('dashboard', { fname: 'Ravi',message:loginmessage});

  });
module.exports = router;

