// friends-data.js and path package is needed for api-routes.js we need to require

// using different variable name for friends-data.js
var usersData = require('../data/friends-data.js') // ../ because we need to exit current folder
var path = require('path');


// ===============================================================================
// ROUTING
// ===============================================================================

//need to make routing available to rest of the application

module.exports = function(app) {
    // Below API GET REQUESTS
    // handles when user "visit" a page
    // In each of the below cases when a user visits a link

    // app.get('/api/survey', function(request, response) {
    //     response.json(usersData);
    // });

    // Below API POST REQUESTS
    app.post('/api/survey', function(request, response) {
    	
    	usersData.push(request.body);

        // console.log(request.body.name);
        // console.log(request.body.scores.length);

        for (var i = 0; i < usersData.length; i++) {

                var sum = usersData[i].scores.reduce(addScore);

                function addScore(a, b) {
                    return a + b;
                }
                console.log(sum);

                // response.json({
                // 	'name':
                // 	'photo':
                // })

        };

    })
}
