var apiBenchmark = require('api-benchmark');
var services = require('./services').s;

var routes = {
	root: '/'
	//,notFound: '/notFound'
};

var options = {
	debug: true
	,runMode:'parallel'
	,maxConcurrentRequests:1000
	,minSamples: 10000
	//,maxTime: 1000
};

apiBenchmark.compare(services, routes, options, function(err, results){
	//console.error(err);
	console.log(results);
});