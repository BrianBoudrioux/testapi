var mongoose = require("mongoose"),
    passwordHash = require("password-hash"),
    jwt = require("jsonwebtoken"),
    config = require("../config/config"),
    Users = mongoose.model("User");


exports.authenticate = function(req, res)
{
    if (req.body.password && req.body.email)
    {
        Users.findOne({email: req.body.email}, function(err, user) {
            if(err) res.json(err);

            if (user != null) {
                var check_pwd = passwordHash.verify(req.body.password, user.password);
                if (check_pwd)
                    res.json({authenticate: true, message: "sucessfully connected.", user: user});
                else
                    res.json({authenticate: false, message: "Please verify your email and password."})
            }
            else
                res.json({authenticate: false, message: "Please verify your email and password."})
        });
    }
    else
        res.json({authenticate: false, message: "You must define your email and your password for connect to this api."});
}

exports.register = function(req, res)
{
    if (req.body.password && req.body.email)
    {
        Users.findOne({email: req.body.email}, function(err, user) {
            if (err) res.json(err);
            else if (user == null) {
                Users.create({ email: req.body.email, password: passwordHash.generate(req.body.password)}, function (err, user) {
                  if (err) res.json(err);
                  else
                    res.json({created: true, message: "user sucessfully created", user: user})
                });
            }
            else
                res.json({authenticate: false, message: "A account allready exist for this email."});


        });
    }
    else
        res.json({authenticate: false, message: "You must define your email and your password for create your account to this api."});
}
