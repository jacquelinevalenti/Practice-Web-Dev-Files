// create a simple to-do list using JS prompts/alerts in the browser

// create an empty array to hold our to-dos
let todos = [];

// start by asking the user what they want to do
let userchoice = prompt("What would you like to do?");

while (userchoice !== "quit"){
    // add a new to-do
    if(userchoice === "new"){
        addToDo();
    }
    // list the to-dos
    else if(userchoice === "list"){
        listToDos();
    }
    // remove a to-do
    else if(userchoice === "delete"){
        deleteToDo();
    }
    // handle for invalid entries from user
    else{
        console.log("Not a valid command");
    }
    // ask for input again to continue the loop
    userchoice = prompt("What would you like to do?");
}

function listToDos(){
    console.log("******");
    todos.forEach(function(thing, i){
        console.log(i + ": " + thing);
        })
    console.log("******");
}

function deleteToDo(){
    let deleted = prompt("Which index should be removed?");
    todos.splice(deleted, 1);
    console.log("To-do deleted");
}

function addToDo(){
    let usertodo = prompt("Please enter your to-do: ");
    todos.push(usertodo);
    console.log("To-do added");
}

// acknowledge that the loop has exited
console.log("Ok, you quit the app.");
