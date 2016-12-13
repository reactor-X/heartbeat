//Set the universally accessible configuration parameters here.
var string_table = require('./string_table');
var config = {
'database_url': 'mongodb://localhost/heartbeat',
'db_connector_path': '../model/datastore-connectors/mongo-connector',
'model_path': '../model/schema',
'string_table': string_table,
'session':{
    secret: 'i!gP&3ibF}Qx<)+V(ZiY$&nXY)R&AUj@dQEz47M?<FU[&21jtL[GQ.Kzm-.n%=C',
    resave: true,
    saveUninitialized: true
	},
/* Paths are with respect to web root
   Keep the paths descriptive, add as ['exposedurl','relative_url'] to bootstrap along with the app.
*/
'paths':{
		'binaries':	['/lib','../node_modules'],
		'styles':	['/css','../public/assets/css'],
		'javascripts':	['/js','../public/assets/js'],
		'systemjsconfig':	['/config','../config'],
		'angular_frontend':['/app','../app'],
	}
};
var db = require(config.db_connector_path);
var authentication = require('../services/universe/authentication');
var container = {
'config': config,
'services': {
'database': db,
'authentication': authentication
}
};	
/*
* You can add additional components to the container to make it available to the entire app.
*/
module.exports = container