// var express = require("express");
//var app = express();


//app.get("/",function(request, response){
//  response.send("hello world");
//});
//app.listen(591);

var http = require('http');

var server = http.createServer(function(req,res){

  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.end('hi dude');
});
server.listen(3000,'192.168.1.65');
console.log("отслеживаем порт1 3000")
