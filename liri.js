var request = require('request');
var userInput = process.argv;
var movieName = "";

for (var i = 2; i < userInput.length; i++) {
    if (i > 2 && i < userInput.length) {
        movieName = movieName + "+" + userInput[i];
    } else {
        movieName += userInput[i];
    }
}

if (userInput.length < 2) {
    movieName = "Mr. Nobody";
}

var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

console.log(queryURL);

request(queryURL, function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log("Title: " + JSON.parse(body).Title);
        console.log("Year: " + JSON.parse(body).Year);
        console.log("IMDB Rating: " + JSON.parse(body).Ratings.imdbRating);
        console.log("Country: " + JSON.parse(body).Country);
        console.log("Language: " + JSON.parse(body).Language);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Cast: " + JSON.parse(body).Actors);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings);
    }
});
