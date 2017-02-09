//fetching all routes files.
var api = require('./api');

var routes = function(app){
	//Initilizing routes
	api(app);
}

module.exports = routes;