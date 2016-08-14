var app = require('./config/express.config')();

//Mongoose Config//
require('./config/mongoose.config')();

//Routes//
require('./features/listing/listing.server.routes')(app); //auth
require('./features/comments/comments.server.routes')(app); //users

//Necessary to allow refresh/navigation in html5mode(true)//
app.all('*', function (req, res, next) {
	// Just send the index.html for other files to support HTML5Mode
	res.sendFile('../public/index.html', {
		root: __dirname
	});

});

//PORT//
var port = 8080;

app.listen(port, function () {
	console.log('Listening on port ' + port);
});
