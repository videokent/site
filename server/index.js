 var express = require("express");
 var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended:false});


app.post('/sub',urlencodedParser, function(req,res ){

  res.render('sub');
  //console.log(req.body);
});
