var path = require('path');

module.exports = function(app) {

    app.get('/quiz', function(request, response) {
        response.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // If no matching route is found default to home
    app.use(function(request, response) {
        response.sendFile(path.join(__dirname + '/../public/home.html'));
    });

};
