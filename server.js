var express = require('express');
var path = require('path');
var port = 3000;
var app = express();
var bodyParser = require('body-parser');
var randyNum = require('./modules/randyNum');
var compareNums = require('./modules/compareNums');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, function(){
    console.log('server working', port);
});

app.get('/', function(req, res){
    res.sendFile(path.resolve('public/views/index.html'));
    console.log('base url');
})

var randomNumber = 1001;

app.post('/setup', function(req, res){
    console.log(
        req.body.gameMode,
        req.body.firstPlayer,
        req.body.secondPlayer,
        req.body.thirdPlayer,
        req.body.fourthPlayer
    );
    randomNumber = randyNum(req.body.gameMode);
    console.log(randomNumber);
    res.send('Random number generated.');
})

app.post('/guess', function(req, res){
    console.log(
        req.body.player1,
        req.body.player2,
        req.body.player3,
        req.body.player4
    );
    var guessArray = [
        req.body.player1,
        req.body.player2,
        req.body.player3,
        req.body.player4
    ];
    res.send(compareNums(guessArray, randomNumber));;
})