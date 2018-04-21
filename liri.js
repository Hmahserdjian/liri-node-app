var keys= require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");


require("dotenv").config();

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var spotifyArgs = process.argv;


var web = "";
for (var i = 2; i < spotifyArgs.length; i++) {

    address = address + " " + spotifyArgs[i];

    spotify
        .request('https://api.spotify.com/v1/artist/')
        .then(function (data) {
            console.log(data);
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });
}
var userInput = (
spotify.search({ type: 'track', query: 'all eyez on me', limit: 1 }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
data.tracks.items.forEach(item => {
    console.log(item.album.name);
    console.log(item.artists[0].name);
    console.log(item.tracks.name);
});
    

    console.log(data.items.track.artists.name);
}));