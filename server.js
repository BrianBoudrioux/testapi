var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require('body-parser'),
    port = 3000,
    app = express();


// import model
var User = require('./api/models/userModel');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// connect to the db
mongoose.connect('mongodb://localhost/testapi', {useNewUrlParser: true});

// get the routes
var authRoute = require("./api/config/routes/auth");

// instantiate the routes
authRoute(app);

// 404 trigger
app.use(function(req, res) {
  res.status(404).send({message: req.originalUrl + ' not found'})
});

// start the server
app.listen(port, () => {
    console.log("Server running on port 3000");
});
