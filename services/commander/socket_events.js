var socket_events={
	'request':
	{
		'dashboard_host_environment' : 'ask_host_info',
		'dashboard_system_uptime' : 'ask_host_uptime',
	},

	'response':
	{
		'dashboard_host_environment' : 'get_host_info',
		'dashboard_system_uptime' : 'get_host_uptime',
	}

};

module.exports = socket_events;