var tableData = require('../data/friends.js');
var path = require('path');

module.exports = function(app){

	app.get('/api/survey', function(request, response){
		res.json(friends);
	});

	app.post('/api/survey', function(request, response){
		if(friends.length = 10)	{
			friends.push(request.body);
			request.json(true);
		}
	})
}