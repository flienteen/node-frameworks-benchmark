var koa = require('koa');
var app = koa();

app.use(function *(){
	this.body = 'Hello World!';
});

app.listen(parseInt(process.argv[2],10));