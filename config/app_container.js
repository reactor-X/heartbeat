//Set the universally accessible configuration parameters here.
var string_table = require('./string_table')
var config = {
    'database_url': 'mongodb://localhost/heartbeat',
    'db_connector_path': '../mongo-connector',
    'model_path': '../model',
    'string_table': string_table
};

var db = require(config.db_connector_path);
var authentication = require('../services/authentication');

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