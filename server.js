// Require dependencies
var express = require('express');
var app = express();
var path = require('path');




// Set our port to 8080
var PORT = 3000;

// Sets up the Express app to handle data parsing
// for sending POST requests
//Parses the HTTP request body
// Allows Express to read the body and parse it to JSON
//urlencoded converts characters into a format that can be sent over the internet
// Extended: False it will display data differently
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


// to use bootstrap from public folder
app.use(express.static(path.join(__dirname, 'public')));


// Routes
// =============================================================
// Basic route that sends the user first to the Pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "views/about.html"))
});

app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "views/contact.html"))
});

// 404 Error Handler //
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/views/404.html")
});

app.post('/thanks', function(req, res){
    console.log(req.body);
    res.send("Request Received!");
 });









// Starts our server to begin listening
app.listen(PORT, function() {
    console.log("App is listening on port: " + PORT);
})




















