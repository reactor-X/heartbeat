$(document).ready(function(){

  var socket = io('http://localhost:3000');

  socket.on('connection', function (data) {
    	if (data.status==true){
    		console.log('Connected');
    		console.log()
    	}
  });

});
