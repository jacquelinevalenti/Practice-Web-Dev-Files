
// 5 main methods in DOM manipulation
// all start with document

// ****** querySelector ******
// returns the first element that matches a given CSS-style selector

var tag = document.querySelector("#highlight");
var h1 = document.querySelector("h1");
var bolded = document.querySelector(".bolded");


// ****** querySelectorAll ******
// just like queryselector, but returns all occurances in an HTMLCollection
var lis = document.querySelectorAll("li");


// ****** getElementById ******
// takes in an id name and returns the one element that matches it; represented by an object
var tag = document.getElementById("highlight");


// ****** getElementsByClassName ******
// similar to above; returns all occurances of elements matching the class name in an HTMLCollection
var tags = document.getElementsByClassName("bolded");


// ****** getElementsByTagName ******
// returns an HTMLCollection of elements that match a given tag name
var tags = document.getElementsByTagName("li");


// *****************

var body = document.querySelector("body"); // select
var isBlue = false;

setInterval(function(){
    // manipulate
    if(isBlue){
        body.style.background = "white";
    }
    else{
        body.style.background = "#3498db";
    }
    isBlue = !isBlue;
}, 1000);

var h1 = document.querySelector("h1");
h1.style.color = "pink";


// **** style property ****
// one way to manipulate an element's style
// right side of manipulation must be a string
var h1 = document.querySelector("h1");
h1.style.color = "yellow";


// **** separation of concerns ****
// use JS to turn classes on and off in the CSS rather that directly manipulating the styling of an element
// can use toggle to turn a class on and off. this is useful for something like a to-do list so a user can check something off and uncheck something

var p = document.querySelector("p");
p.classList.add("big");

// **** textContent ****
// returns a string of all the text contained in a given element; does not include the tags themselves
// <p> this is an <strong>awesome</strong> paragraph </p> 
var tag = document.querySelector("p");

// retrive the textContent
tag.textContent // returns "this is an awesome paragraph"

// alter the text in that element
tag.textContent = "I'm changing this paragraph";
