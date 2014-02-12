var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello World!');
});

app.listen(parseInt(process.argv[2],10));