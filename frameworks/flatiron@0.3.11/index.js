var flatiron = require('flatiron'),
	app = flatiron.app;


//
// app.router is now available. app[HTTP-VERB] is also available
// as a shortcut for creating routes
//
app.router.get('/', function () {
	this.res.writeHead(200, { 'Content-Type': 'text/plain' })
	this.res.end('Hello World!');
});

app.start(parseInt(process.argv[2],10));