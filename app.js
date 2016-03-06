var exp = require("express");
var app = exp();

var routes = require('./routes/routes.ejs');

app.set ('view engine', 'ejs');

app.get('/', routes.myHomeFn);
app.get('/:city', routes.myCityFn);

var port = process.env.PORT || 4000;
app.listen(port,function() {
	console.log("server is listening on port " + port);

});


