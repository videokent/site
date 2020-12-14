 var express = require("express");
 var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended:false});


app.post('/about',urlencodedParser, function(req,res ){

  res.render('about');
  console.log(req.body);
});
