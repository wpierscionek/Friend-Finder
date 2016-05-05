// We need to include the path package to get the correct file path for our html

var path = require('path');

// ===============================================================================
// ROUTING
// ===============================================================================

//need to make routing available to rest of the application

module.exports = function(app) {

    // HTML GET REQUESTS
    // below code handles when users "visit" a page
    // in each of the below cases the user is shown an HTML page of content

    app.get('/home', function(request, response) {
        response.sendFile(path.join(__dirname + '/../public/index.html'));
    });
    app.get('/survey', function(request, response) {
        response.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // if no matching route is found set default

    app.use(function(request, response) {
        response.sendFile(path.join(__dirname + '/../public/index.html'));
    });
}
