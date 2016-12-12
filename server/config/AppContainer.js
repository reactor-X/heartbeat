//An example configuration, you can modify as you see fit.
//(Implementation to load this file or the file format may change in future.)
// //Set the universally accessible configuration parameters here.
// let string_table = require('./string_table');
//
// let config = {
// 'database_url': 'mongodb://localhost/heartbeat',
// 'db_connector_path': '../mongo-connector',
// 'model_path': '../model',
// 'string_table': string_table,
// 'session':{
// 	'secret':'i!gP&3ibF}Qx<)+V(ZiY$&nXY)R&AUj@dQEz47M?<FU[&21jtL[GQ.Kzm-.n%=C',
// 	'activeDuration': 5 * 60 * 1000,
// 	'duration': 30 * 60 * 1000,
// 	'name':'session'
// 	}
// };
//
// let db = require(config.db_connector_path);
// let authentication = require('../services/authentication');
// /*
// * You can add additional components to the container to make it available to the entire app.
// */
//
// export class AppContainer{
// config :any= config;
// services :any= { 'database': db,
// 						'authentication': authentication
// 					};
// };
//# sourceMappingURL=AppContainer.js.map