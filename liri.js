require("dotenv").config();
// Add the code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");
// import npm packages: axios, moment, fs, spotify
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
var Spotify = require("node-spotify-api");

// initializing spotify keys
var spotify = new spotify(keys.spotify);

// making axios requests to omdb & bands in town
// axios.get("http://omdbapi.com/?"
// .then(function(response) {
//     console.log("");
// }).catch(function(error){
//     if (error) {
//         console.log("------Data-------");
//         console.log(error.response.data);
        
//     }
// });


// };



// liri's event listeners (1-4):
// 1. 'concert-this':
//     will return user (name of venue, venue location, date of event-format mm/dd/yyyy);
// 2. 'spotify-this-song':
//     will return user (name of artist, song's name, preview link of the song from spotify, album that the song is from);
var uiArtist = function(artist) {
    return artist.name;
};
spotify.search({
    type: 'track',
    query: 'My Search Query'
},function(err, data){
    if (err){
        return console.log('Error: ' + err);
    }
    console.log(data);
});
spotify.search({
    type: uiArtist,
    query: 'all the small things'
}.catch(function(err){
    console.log(err);
})

// 3. 'movie-this':
//     will return user {
//         title of movie, 
//         year of movie, 
//         imdb rating,
//         rotten tomatoes rating of movie, 
//         country produced, 
//         language of the movie, 
//         plot of the movie, 
//         actors in the movie;}
//     if no movie is provided, default should return "MR. NOBODY";

// 4. 'do-what-it-says':
//         will return user{
//             spotify-this-song: "I want it that way", as follows in the text in random.txt,
//             edit the text in random.txt to test out the feature for movie-this, and concert-this
//         }

// Bonus:
// {

//     output the data to a txt.file called "log.txt"
var writeLog = function(data){

//     append each command you run to the log.txt file
fs.appendFile("log.txt", JSON.stringify(data) + "\n", function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Last UI successfully added to log.txt");
    });
};
//     do not overwrite your file each time you run a command
// }
runInput(process.argv[2], process.argv.slice(3).joing(" "));
