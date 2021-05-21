var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer({ dest: 'upload/' })
var fs = require('fs');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.locals.pretty = true;
app.set('views', './views_file');
app.set('view engine', 'jade');
app.get('/upload', function(req, res){
  res.render('upload');
});