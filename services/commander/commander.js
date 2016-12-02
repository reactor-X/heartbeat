/* Sets up the socket command interface for the server */

var socket_events=require('./socket_events');
var operating_system=require('../os/operating_system');
var commander={
	'initializeSocketEvents':function(io){

			io.on('connection', function (socket) {
				console.log('server connect');
				socket.emit('connection', { status: true});
				//System information
				socket.on(socket_events.request.dashboard_host_environment,function(data){	

						operating_system.terminal.ubuntu.executeCommand('lsb_release -a',function (error,stderror,stdout){
						socket.emit(socket_events.response.dashboard_host_environment, { data: stdout });
						console.log('server dashboard host');console.log(stdout);
					});
				});
			});

			
	}
}

module.exports = commander;