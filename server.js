var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require('body-parser'),
    port = 3000,
    app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// connect to the db
mongoose.connect('mongodb://localhost/testapi', {useNewUrlParser: true});

// get the routes
var authRoute = require("./api/config/routes/auth.js");

// instantiate the routes
authRoute(app);



// start the server
app.listen(port, () => {
    console.log("Server running on port 3000");
});
