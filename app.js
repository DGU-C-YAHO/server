var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');
//app.use(express.bodyParser());
var bodyParser = require('body-parser');
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.listen(3303, "localhost", function() {
  console.log('Server Start .');
});



app.get('/', function (req, res) {
  fs.readFile('main.html', function (error, data) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end(data, function (error){
      console.log(error);
    });
  });
});
app.get('/mainfile', function (req, res){
  fs.readFile('mainfile.html', function (error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data,function (error){
      console.log(error);
    });
  });
});
app.get('/mainlink', function (req, res){
  fs.readFile('mainlink.html', function (error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data,function (error){
      console.log(error);
    });
  });
});
app.get('/loading', function (req, res){
  fs.readFile('loading.html', function (error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data,function (error){
      console.log(error);
    });
  });
});
app.get('/result', function (req, res){
  fs.readFile('result.html', function (error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data,function (error){
      console.log(error);
    });
  });
});
app.get('/error', function (req, res){
  fs.readFile('error.html', function (error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data,function (error){
      console.log(error);
    });
  });
});
/*
app.post('/upload', function (req, res){
  fs.readFile(req.files.uploadFile.path, function (error, data) {
    var filePath = __dirname + "\\uploads\\" + req.file.uploadFile.name;
    fs.writeFile(filePath, data, function(error){
      if(error){
        throw err;
      } else {
        res.redirect("back");
      }
    });
  });
});
*/
var multer = require('multer');

var upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
});
/*app.get('/upload', function (req, res){
  fs.readFile('loading.html', function (error, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data,function (error){
      console.log(error);
    });
  });
});*/
app.get('/upload', (req, res) => {
  res.sendFile(path.join(__dirname, 'loading'));
});
app.post('/upload',
  upload.fields([{ name:'uploadFile'}]),
  (req, res) => {
    fs.readFile('loading.html', function (error, data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data,function (error){
        console.log(error);
      });
    });
  },
);
