var express = require("express");
var app = express();

var dict = {
    "pig": "oink",
    "cow": "moo",
    "duck": "quack",
    "dog": "woof",
    "cat": "meow"
};

// visiting "/" prints "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
})

// visiting "/speak/<animalName>" should print "The <animalName> says '<animalSound>'"
app.get("/speak/:animalName/", function(req, res){
    var animal = req.params.animalName.toLowerCase();
    res.send("The " + animal + " says '" + dict[animal] + "'");
})

// visiting "/repeat/<phrase>/<number>" should print the phrase that number of times
app.get("/repeat/:string/:num", function(req, res){
    var number = Number(req.params.num);
    var phrase = req.params.string;
    var output = "";
    for(var i = 0; i < number; i++){
        output += phrase + " ";
    }
    res.send(output);
})

// visiting any other route prints "Sorry, page not found... what are you doing with your life?"
app.get("/*", function(req, res){
    res.send("Sorry, page not found... what are you doing with your life?");
})

// listening to port 3000
app.listen(3000);