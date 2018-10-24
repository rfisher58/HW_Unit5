require('dotenv').config();

const keys = require("./keys.js");

const fs = require("fs");

const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

const request = require("request");


const input = process.argv[2];

let movieChoice = " ";

  for(i = 3; i <process.argv.length; i++){
    movieChoice += process.argv[i] + " ";
  }

let songChoice = " ";

  for(i = 3; i < process.argv.length; i++){
   songChoice += process.argv[i] + " ";
  }

  let concertChoice = "";
  
  for(i = 3; i < process.argv.length; i++){
    concertChoice += process.argv[i];
   }
let myChoice = " ";

   for(i = 3; i < process.argv.length; i++){
    myChoice += process.argv[i];
   }

const processRequest = function(input, songChoice){
  if(input === "spotify-song"){
    getSongs (songChoice);
  }
 else if(input === "concert-this"){
    console.log("You are running concert");
    getConcert(concertChoice);
  }
  else if(input === "movie-this"){
    console.log("You are running movie", movieChoice);
    getMovie(movieChoice);
  }
  else if(input === "do-what-it-says"){
    console.log("You are running do", input);
    getMy();
 
  }
}


const getSongs = function(songChoice){
spotify.search({ type: 'track', query: songChoice }, function(err, data) {
if (err) {
return console.log('Error occurred: ' + err);
  }
  for(i = 0; i < data.tracks.items.length; i++){
  }
console.log(data.tracks.items[1].album.name);
console.log(data.tracks.items[1].album.external_urls.spotify);
console.log(data.tracks.items[1].name);
console.log(data.tracks.items[1].artists[0].name);
})
};



const getConcert = function(concertChoice) {
  console.log(concertChoice)
  request(`https://rest.bandsintown.com/artists/${concertChoice}/events?app_id=codingbootcamp`, function(error, response, body) {
    console.log(error)
    let data = JSON.parse(body);
    console.log(data[i].venue);

});
}

const getMovie = function(movieChoice) {
  request(`http://www.omdbapi.com/?t=${movieChoice}&y=&plot=full&tomatoes=true&apikey=trilogy`, function(error, response, body) {
    let data = JSON.parse(body);
  // console.log(body)

});
}

const getMy = function(myChoice){
  fs.readFile("random.txt", "utf8", function(err, data){
  let whatever = data.split(",");
  console.log("hello", whatever)
  processRequest(whatever[0], whatever[1]);
  })
  
  }



processRequest(input, songChoice, movieChoice, concertChoice)