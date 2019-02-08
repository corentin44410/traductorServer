//to start -> npm run start || node server.js
//tuto -> https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm
var express = require('express');
var app = express();
var fs = require("fs");
const translation = require("./speech-to-translated-speech.js");
var http = require("http");
var url = require("url");
var bodyParser = require("body-parser");

const async = require("async");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.get('/languages', function (req, res) {
   fs.readFile( __dirname + "/data/" + "languages.json", 'utf8', function (err, data) {
      console.log( data );
      res.send( data );
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
   console.log(`creating a user ${req.body} ${req.body}`);
   
   var translate = translation.vocalTranslator();
   // res.send(translation.vocalTranslator('de','coucou petite pute'));
   
   let response = translation.vocalTranslator('de','coucou petite pute');
   response.then(function(value) {
     console.log('ICI PD'+value);
     res.send('https://traductor-server-boysband98.c9users.io:8082/'+value);
   });
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
   console.log("App listening at http://%s:%s", host, port)
})
