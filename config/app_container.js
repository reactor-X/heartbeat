
//Set the universally accessible configuration parameters here.
var config={
	'database_url' : 'mongodb://localhost/heartbeat',
	'db_connector_path':'../mongo-connector',
	'model_path':'../model'
};

var db=require(config.db_connector_path);

var container={
	'config':config,
	'services':{
		'database':db
	}
};

/*
* You can add additional components to the container to make it available to the entire app.
*/
module.exports = container