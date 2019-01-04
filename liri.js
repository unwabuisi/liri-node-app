var fs = require("fs");
// var request = require("request");

var action = process.argv[2];

function tweetSearch() {
    var twitterKeys = require("./keys.js");
    var Twitter = require('twitter');

    // console.log(twitterKeys);

    var client = new Twitter({
        consumer_key: twitterKeys.consumer_key,
        consumer_secret: twitterKeys.consumer_secret,
        access_token_key: twitterKeys.access_token_key,
        access_token_secret: twitterKeys.access_token_secret
    });

    client.get('favorites/list', function(error, tweets, response) {
      if(error){
          console.log(error);
      }
      // console.log(tweets);  // The favorites.
      // console.log(JSON.stringify(response));  // Raw response object.
    });

}

function spotifySearch() {
    var song = process.argv[3];

    // handles song names with more than one word
    if (process.argv.length > 3) {
        for (var i = 4; i < process.argv.length; i++) {
            song += ' ' + process.argv[i];
        }
    }

    var keys = require('./spotifykeys.js');
    var Spotify = require('node-spotify-api');

    var spotify = new Spotify ({
        id: keys.spotifyKeys.clientID,
        secret: keys.spotifyKeys.clientSecret
    });

    spotify.search({
        type: 'track',
        query: song,
        limit: 1
    }, function(err,data) {
        if (err) {
            return console.log('Error occured: ' + err);
        }
        // var songData = JSON.stringify(data, null, ' ');
        // console.log(songData);

        var artistName = data.tracks.items[0].album.artists[0].name;
        var albumName = data.tracks.items[0].album.name;
        var previewLink = data.tracks.items[0].album.artists[0].external_urls.spotify;
        var trackName = data.tracks.items[0].name;

        console.log('\n\n**** LIRI ****\n');
        console.log('Artist: ' + artistName);
        console.log('Song: ' + trackName);
        console.log('Preview Link: ' + previewLink);
        console.log('Album: ' + albumName);
        console.log('\n**** LIRI ****\n\n');
    });








}

function movieSearch() {

}

function doWhatItSays() {

}



switch (action) {
    case 'my-tweets':
        tweetSearch();
        break;

    case 'spotify-this-song':
        spotifySearch();
        break;

    case 'movie-this':
        movieSearch();
        break;

    case 'do-what-it-says':
        doWhatItSays();
        break;
    default:
        console.log('\n\n**** LIRI ****\nERROR: You did not enter a recognized command!\n');
        console.log('Please enter one of the following commands (ex: node liri.js <command>):');
        console.log('\n> my-tweets\n> spotify-this-song <song name here>\n> movie-this <movie name here>\n> do-what-it-says\n\n');
}