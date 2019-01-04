# liri-node-app
Liri Node App
LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

## How To Install
- If you do not have node installed, follow the instructions [here](https://nodejs.org/en/download/)
- If nodeJS is installed on your machine, clone this repository then open your terminal/bash window and navigate to the folder where you cloned the repository
- type `npm i` to install the needed packages/dependencies and you're done!

## How It Works
There are 4 commands LIRI can take in:

### my-tweets
This will show your last 20 tweets (excluding retweets), links to those tweets, Tweet IDs, and the dates they were created.

Run this command by typing the following in your terminal/bash window:
`node liri.js my-tweets '<your twitter username>'`


### spotify-this-song
This will show you the following info about a song:
* Artist(s)
* Song Name
* Preview link of the song from Spotify
* Album the song is from

If no song parameter is provided, the default song info will be "The Sign" by Ace of base

Run this command by typing the following in your terminal/bash window:
`node liri.js spotify-this-song <song name here>`


### movie-this
This will show you the following information about a movie:
* Title of the movie
* Year the movie came out
* IMDB Rating of the movie
* Country where the movie was produced
* Language of the movie
* Plot of the movie
* Actors in the movie
* Rotten Tomatoes Rating

If no movie parameter is provided, LIRI will output data for the movie 'Mr. Nobody'

Run this command by typing the following in your terminal/bash window:
`node liri.js movie-this <movie name here>`


### do-what-it-says
This will take the text inside of the file 'random.txt' and use it to call one of LIRI's commands. Feel free to change the text in the document to test out the feature for other commands. It follows the same guidelines as typing out a command in the terminal/bash window.

Run this command by typing the following in your terminal/bash window:
`node liri.js do-what-it-says`


-----------
## Packages Used
LIRI runs with the help of 3 node packages:
* [Twit](https://www.npmjs.com/package/twit) for the Tweet search
* [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) for the song information data
* [request](https://www.npmjs.com/package/request) for the movie information data
----
- All commands are recorded in to the log.txt file.
- Authentication keys for Spotify and Twitter are located in the keys.js file