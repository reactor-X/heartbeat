/* Sets up the socket command interface for the server */
var socket_events=require('./socket_events');
var operating_system=require('../os/operating_system');
var authentication=require('../authentication');
var session_config = require('../../config/app_container.js').config.session;
var primary_json_generator=require('../os/JSONGenerators/bootstrap.js');
var commander={
	'initializeSocketEvents':function(io){
			io.on('connection', function (socket) {
				//console.log(authentication.getSocketSession(socket,session_config));
				//System information
				socket.on(socket_events.request.dashboard_host_environment,function(data){
						operating_system.terminal.ubuntu.executeCommand(operating_system.terminal.ubuntu.commands[socket_events.response.dashboard_host_environment],function (error,stderror,stdout){
							console.log(primary_json_generator.ubuntu.generateJSON(operating_system.terminal.ubuntu.commands[socket_events.response.dashboard_host_environment],error,stderror,stdout));
						socket.emit(socket_events.response.dashboard_host_environment, { data: stdout });
					});
				});
			});

			
	}
}

module.exports = commander;