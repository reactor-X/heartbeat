var supported_commands=require('../ubuntu').commands;
var supported_commands=require('../ubuntu').commands;
console.log(supported_commands);
var UbuntuJsonGenerator={
	/*
	* Generates command output formatted into streams. Standardized JSON is generated later.
	*/
	'generateJSON': function (command,error,stderror,stdout){
		var response={};
		//Ignore unsupported commands (Safeguard against malicious execution)
		if (typeof (supported_commands[command]).toLowerCase() === 'undefined') {
			response.status='-1';
			response.message='Unsupported/Invalid Command'; 
			return response;
		}
	}
}

module.exports = UbuntuJsonGenerator