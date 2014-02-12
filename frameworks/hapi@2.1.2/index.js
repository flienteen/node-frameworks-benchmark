var Hapi = require('hapi');


// Create a server with a host and port
var server = Hapi.createServer('localhost', parseInt(process.argv[2],10));

// Add the route
server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		reply('Hello World!');
	}
});

// Start the server
server.start();