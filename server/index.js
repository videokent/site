 var express = require("express");
 cors = require("cors");
 var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(cors());

app.post('../sub',urlencodedParser, function(req,res ){

  res.render('sub2', {data: req.body});
  console.log(req.body);
});
