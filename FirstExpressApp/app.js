// import express
var express = require("express");
// run express and save to variable
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/dog" => "Meow!"
app.get("/dog", function(req, res){
    res.send("Meow!");
});

// use a colon in front of part of the URL to designate a parameter
// if we put in anything for subsiteName in the browser, it will redirect us here
app.get("/r/:subredditName", function(req, res){
    // make your site dynamic by using the parameter
    var subreddit = req.params.subredditName;
    res.send("This is the " + subreddit.toUpperCase() + " subreddit!");
})

// you can get very specific with your routes depending on your needs
app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    // req holds all the metadata that's sent in the request
    // req.params shows us the values for the 3 variables we defined in our route
    console.log(req.params);
    res.send("Here are some comments!");
})

// use * to define a route for anything that doesn't match any of your predefined routes
// order of routes matters!! if this route is placed first, everything will be routed here
app.get("*", function(req, res){
    res.send("You are a star!");
})

// tell express to listen for requests (start server)
app.listen(3000, function(){
    console.log("server has started");
});