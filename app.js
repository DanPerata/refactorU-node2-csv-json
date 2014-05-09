var express = require('express');
var app = express();


app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});


var port = process.env.Port || 5462;


var server = app.listen(port, function() {
	console.log('Express server listening on port ' + server.address().port);
});
