var client_sessions = require("client-sessions");
var cookie = require("cookie");

function isLoggedIn(session) {
    if (session && session.user) {
        return true;
    } else return false;
}

function getSocketSession(socket,session_config){
	var opts={
				cookieName: session_config.name,
				secret: session_config.secret,
				duration: session_config.duration,
				activeDuration: session_config.activeDuration,
			 };
	if (typeof (socket) !== 'undefined'){
		return client_sessions.util.decode(opts,cookie.parse(socket.handshake.headers.cookie).session);
	}
}
var authentication = {
    'isLoggedIn': isLoggedIn,
    'getSocketSession':getSocketSession,
};


module.exports = authentication
