// listing all npm packages that were installed for this project

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); // global package

// setting for basic express server

var app = express(); // creating express server
var PORT = process.env.PORT || 80; //if no other port will be specified it will use port 80

// always copy and paste the code below
// bodyParser makes it easy to explain to server what data format is used?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//points our server to a map of routes available in our application 

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app); 



//the below code starts the server

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});


//next create data files that will store user input information