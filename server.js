var express = require('express');
var path = require('path');
var port = 3000;
var app = express();

app.use(express.static('public'));

app.listen(port, function(){
    console.log('server working', port);
});

app.get('/', function(req, res){
    res.sendFile(path.resolve('public/views/index.html'));
    console.log('base url');
})