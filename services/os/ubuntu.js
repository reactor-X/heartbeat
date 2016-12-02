var exec = require('child_process').exec;
var cmd = 'ls -a';

var executeCommand=function(cmd,resultCallback)
{	
	exec(cmd, function(error, stdout, stderr) {
  		if (typeof resultCallback === "function")
  			{
  				resultCallback(error,stderr,stdout);
  			}
	});
};
var ubuntu={
	'executeCommand':executeCommand,
}

module.exports = ubuntu