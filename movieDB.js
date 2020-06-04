// create an array of movie objects
// each movie should have a title, rating and hasWatched properties
// iterate through the array and print out the properties like this: You have watched "Star Wars" - 5 stars


var movieDB = [
    {
        title: "Home Alone",
        rating: 5,
        hasWatched: true
    },
    {
        title: "The Big Lebowski",
        rating: 5,
        hasWatched: true
    },
    {
        title: "P.S. I Love You",
        rating: 4,
        hasWatched: false
    }
]

movieDB.forEach(function(movie){
    console.log(buildString(movie));
})

function buildString(movie){
    let result = "You have ";
    if (movie.hasWatched){
        result += "watched \"";
    }
    else{
        result += "not seen \"";
    }
    result += movie.title + "\" - " + movie.rating + " stars";
    return result;
}