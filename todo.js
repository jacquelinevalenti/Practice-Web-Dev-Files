// create a simple to-do list using JS prompts/alerts in the browser

// create an empty array to hold our to-dos
let todos = [];

// start by asking the user what they want to do
let userchoice = prompt("What would you like to do?");

while (userchoice !== "quit"){
    // add a new to-do
    if(userchoice === "new"){
        let usertodo = prompt("Please enter your to-do: ");
        todos.push(usertodo);
    }
    // list the to-dos
    else if(userchoice === "list"){
        console.log(todos);
    }
    // handle for invalid entries from user
    else{
        console.log("Not a valid command");
    }
    // ask for input again to continue the loop
    userchoice = prompt("What would you like to do?");
}

// acknowledge that the loop has exited
console.log("Ok, you quit the app.");
