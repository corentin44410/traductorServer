//to start -> npm run start || node server.js
//tuto -> https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
var express = require('express');
var app = express();
var fs = require("fs");
const translation = require("./speech-to-translated-speech.js");
var http = require("http");
var url = require("url");


app.get('/languages', function (req, res) {
   fs.readFile( __dirname + "/data/" + "languages.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

/*app.get('/file', function (req, res) {
  var translate = translation.vocalTranslator();
   fs.readFile( __dirname + "/data/" + "translation.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})*/

app.post('/file', function (req, res) {
    console.log(`creating a user ${req.body.#} ${req.body.#}`);

  });

/*app.get('/languages/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "languages.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id]
      console.log( user );
      res.end( JSON.stringify(user));
   });
})*/

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
