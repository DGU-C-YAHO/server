var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.bodyParser());
app.listen(3303, "localhost", function() {
    console.log('Server Start .');
});

app.get('/', function (req, res) {
    fs.readFile('mainfile.html', function(error, data){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data, function (error){
            console.log(error);
        });
    });
});

app.post('/upload', function(req, res){
    fs.readFile(req.files.uploadFile.path, function(error,data){
        var filePath = __dirname + "\\files\\" + req.files.uploadFile.name;
        fs.writeFile(filePath, data, function(error){
            if (error) {
                throw error;
            } else {
                res.redirect("back");
            }
        });
    });
});