$(document).ready(function(){
  
  var socket = io('http://localhost:3000');

  socket.on('connection', function (data) {
    	socket.socket_events=data;
  });

  socket.on('logout',function(data){
  		window.location.replace('/logout');
  });

  socket.on('live_terminal_output',function (data){
  	    var prevData=$('.live_terminal').val();
  	    prevData=prevData.split('\n');

  	    if (data!==prevData[$(prevData).length-2])
  			{
  				$('.live_terminal').val($('.live_terminal').val()+data);
  			}
  		 $('.live_terminal').scrollTop($('.live_terminal')[0].scrollHeight);
  		 $('.live_terminal').removeAttr('disabled');
  });

  $('.live_terminal').keypress(function(key){

  		if (key.keyCode==108 || key.keyCode==13)
  		{	key.preventDefault();
  			var data=$('.live_terminal').val();
  			data=data.split('\n');
  			var finaldata=data[data.length-1].replace(/\$/g,'')+'\n';
  			//Check if entering a password,
  			if (finaldata.indexOf(': ')>=0){
  				finaldata=finaldata.split(':')[1];
  				console.log(finaldata);
  			}
  			socket.emit('live_terminal_input',finaldata);
  			$('.live_terminal').attr('disabled',true);
  		}
  });

});
