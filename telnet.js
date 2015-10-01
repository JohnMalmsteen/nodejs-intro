// From: http://www.davidmclifton.com/2011/07/22/simple-telnet-server-in-node-js/

var net = require('net');

/*
 * Callback method executed when a new TCP socket is opened.
 */
function newSocket(socket) {
	socket.write('Welcome to the Telnet server!\n');
  setTimeout(function() {
      socket.write('Hello Node!\n');
  }, 3000);

}



// Create a new server and provide a callback for when a connection occurs
var server = net.createServer(newSocket);

// Listen on port 8888
server.listen(8888);

console.log("Telnet server listening on http://127.0.0.1:8888");
