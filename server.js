//https://www.webucator.com/tutorial/learn-ajax/ajax-basics.cfm


const express = require('express');
var MongoClient = require('mongodb').MongoClient;
const app = express();

// serve files from the public directory
app.use(express.static('public'));
const url = 'mongodb://localhost:27017/';
// start the express web server listening on 8080
app.listen(8080, () => {
    console.log('listening on 8080');
});

MongoClient.connect(url, (err, db) => {
    if(err) {
        return console.log(err)
    }
    else
    {
        console.log("Successful connection")
    }

    var dbo = db.db("project");
    app.get('/clicked',function (req, res) {
        console.log("Res Output:");
        console.log(JSON.stringify(req.query.STATE));
        console.log(req.query.YEAR);
        console.log(JSON.stringify(req.query.CAUSE));
        let temp = req.query.YEAR;
        var query;
        if(req.query.YEAR === "All Years")
        {
            query = { State: req.query.STATE, 'Cause Name': req.query.CAUSE};
        }
        else
        {
            query = { State: req.query.STATE, Year: parseInt(req.query.YEAR), 'Cause Name': req.query.CAUSE};
        }
        dbo.collection("deaths").find(query).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
        });
    })
});


// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

