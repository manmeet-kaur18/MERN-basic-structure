console.log('Server-side code running');

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(express.static('public'));
var server = app.listen(4000);
var client = require('socket.io').listen(server);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let db;
const url = 'mongodb://ThaparUser:Pass123#@ds219839.mlab.com:19839/reacttesting';

MongoClient.connect(url, (err, database) => {
    if (err) {
        return console.log(err);
    }
    db = database;
    app.listen((8080), () => {
        console.log('listening on deployed server');
    });
    client.on('connection', function (socket) {
        console.log('Client Socket connected');
        let signup = db.collection('signup');

        // create function to send status//whenever we want to side something from servere side to client side we use emit to do so to show it in html file
        // sendStatus = function (s) {
        //     socket.emit('status', s);
        // };

        db.collection('signup', function (err, collection) {
            if (err) return console.log('error opening users collection, err = ', err);

            signup.find({}).toArray(function (err, res) {
                if (err) {
                    throw errs;
                }
                // emit the messages
                socket.emit('output', res);
                console.log(res);
            });
        });
    });
});

app.post('/signup',(req,res)=>{
    console.log(req.body);
    var hotel = req.body;
    db.collection('signup').save(hotel, (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('click added to db');
        res.send([{
            message: 'Request successfully logged',
            status: true
        }]);
    });
});


app.post('/adminlogin', (req, res) => {
    var firstname= req.body.firstName;
    var lastname = req.body.lastName;
    db.collection('signup').find({
        firstName: firstname,
        lastName: lastname,
    }).toArray((err, result) => {
        if(err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
});


app.get('/getnames', (req, res) => {
    db.collection('signup').find().toArray((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    })
})