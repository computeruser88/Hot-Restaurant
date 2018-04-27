// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3200;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



/* data logic codes */

var maxReservation = 5;
var waitlist = [];

var reservations = [
    {
        name : "Joe",
        phoneNumber : 8007213994,
        email: "jdoe@gmail.com",
        uniqueId : "jdoe"
    }
];



// Basic route that sends the user first to the AJAX Page

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

