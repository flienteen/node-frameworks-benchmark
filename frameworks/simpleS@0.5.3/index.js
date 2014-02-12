var simples = require('simples');
var server = simples(parseInt(process.argv[2],10));

server.get('/', function (connection) {
	connection.end('Hello World!');
});
