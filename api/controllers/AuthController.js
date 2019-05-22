var mongoose = require("mongoose"),
    passwordHash = require("password-hash"),
    jwt = require("jsonwebtoken"),
    config = require("../config/config.js");
    // Users = mongoose.model("Users");


exports.authenticate = function(req, res)
{
    if (req.body.password && req.body.email)
    {
        // Do somethings
        res.json({message: "i will do somethings"});
    }
    else
        res.json({authenticate: false, message: "You must define your email and your password for connect to this api."});
}
