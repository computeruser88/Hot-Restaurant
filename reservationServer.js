// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



/* data logic codes */

const MAX_RESERVATION = 5;
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
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  
app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, ".html"));
});

app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
  
    console.log(newReservation);
  
    if(reservations.length < MAX_RESERVATION){
        reservations.push(newReservation);
    }
    else{
        waitlist.push(newReservation);
    }
  
    res.json(newReservation);
  });



app.listen(process.env.PORT || 6000, function() {
    console.log("App listening on PORT " + PORT);
  });
