var exec = require('child_process').exec;
var cmd = 'ls -a';
var supported_commands=require('../commander/socket_events.js').response;

var executeCommand=function(cmd,resultCallback)
{	
	exec(cmd, function(error, stdout, stderr) {
  		if (typeof resultCallback === "function")
  			{
  				resultCallback(error,stderr,stdout);
  			}
	});
};

var commands=[];

//Add the operating system supported commands here.

commands[supported_commands.dashboard_host_environment]='lsb_release -a';
commands[supported_commands.dashboard_system_uptime]='uptime -p';

var ubuntu={
	'executeCommand':executeCommand,
	'commands':commands
}

module.exports = ubuntu