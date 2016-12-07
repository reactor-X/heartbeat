/* Sets up the socket command interface for the server */
var socket_events=require('./socket_events');
var operating_system=require('../os/operating_system');
var authentication=require('../authentication');
var session_config = require('../../config/app_container.js').config.session;
var primary_json_generator=require('../os/JSONGenerators/bootstrap.js');
var pty=require('pty.js');
var commander={
	'initializeSocketEvents':function(io){
			io.on('connection', function (socket) {
				session_info=authentication.getSocketSession(socket,session_config).content;
				if ((typeof session_info.user).toLowerCase() !== 'undefined'){
					// Create terminal
					var term = pty.spawn('sh', [], {
   					name: 'xterm-color',
   					cols: 80,
   					rows: 30,
   					cwd: process.env.HOME,
   					env: process.env
					});
					term.prevData='';
					// Listen on the terminal for output and send it to the client
					term.on('data', function(data){
   								socket.emit(socket_events.response.live_terminal_data, data);
					});

					// Listen on the client and send any input to the terminal
					socket.on(socket_events.request.live_terminal_data, function(data){
   						term.write(data);
					});

					socket.on(socket_events.request.live_terminal_connect,function(data){
						socket.emit(socket_events.response.live_terminal_connect, { data: stdout });
					});

					socket.on('disconnect',function(){
				    	 term.destroy();
   						 console.log("bye");
				    });
				    socket.emit('connection',socket_events);
			
				
				}
				else {
					socket.emit('logout',{data:''});
				}
			});

			
	}
}

module.exports = commander;