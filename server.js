//https://www.webucator.com/tutorial/learn-ajax/ajax-basics.cfm


const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

// serve files from the public directory
app.use(express.static('public'));
let db;
const url = 'mongodb://localhost:27017/project';
// start the express web server listening on 8080
MongoClient.connect(url, (err, database) => {
    if(err) {
        return console.log(err)
    }
    db = database;
    app.listen(8080, () => {
        console.log('listening on 8080');
    });
});


// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/clicked',function (req, res) {
    console.log("Res Output:");
    console.log(res.param('STATE'));
});
