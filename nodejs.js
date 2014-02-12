var http = require('http');
var port = process.argv[2] || 9001;

http.createServer(function (req, res)
{
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(port, '127.0.0.1');
console.log('Server running at http://127.0.0.1:'+port+'/');
