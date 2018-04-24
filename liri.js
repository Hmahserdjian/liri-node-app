var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require("fs");


require("dotenv").config();

var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

var nodeArgs = process.argv;

var nodeCall = nodeArgs[2];

var userInput = "";

for (let i = 2; i < nodeArgs.length; i++) {
    userInput += nodeArgs[i] + "";

}

for (var i = 3; i < nodeArgs.length; i++) {

    var address = address + " " + userInput;


}
var spotify1 = function (song) {
    if (song == undefined) {
        song = "the sign";
    }

    (
        spotify.search({
                type: 'track',
                query: '',
                limit: 1
            },
            function (err, data) {
                if (err) {

                    return console.log('Error occurred: ' + err);
                }

                data.tracks.items.forEach(item => {
                    console.log(item.album.release_date);
                    console.log(item.artists[0]);
                });



            }));
};
var tweets1 = function () {
    {
        screen_name: 'SkywalkerJabba'
    };

    client.get('statuses/user_timeline', function (error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });


}


var thisRun = function (caseData, functionData) {
    switch (caseData) {
        case "my-tweets":
            tweets1()
            break;
        case "spotify-this-song":
            if (spotify1 === undefined) {
                functionData = defaultSong;
            }
            spotify1(functionData);
            console.log(spotify1)
            break;
    }


}
//this is calling a function called run this so var runThis = your code.
thisRun(process.argv[2], process.argv[3]);