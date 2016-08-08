var StaticServer = require('static-server');

var server = new StaticServer({
	rootPath:'./public',
	port:3000
});

server.start(function () {
	// body...
	console.log('server started on port ' + server.port);
});