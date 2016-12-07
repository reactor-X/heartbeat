var socket_events={
	'request':
	{
		'dashboard_init_protocol' : 'ask_protocol',
		'dashboard_host_environment' : 'ask_host_info',
		'dashboard_system_uptime' : 'ask_host_uptime',
		'live_terminal_data':'live_terminal_input',
	},

	'response':
	{
		'dashboard_init_protocol' : 'get_protocol',
		'dashboard_host_environment' : 'get_host_info',
		'dashboard_system_uptime' : 'get_host_uptime',
		'live_terminal_data':'live_terminal_output',
	}

};

module.exports = socket_events;