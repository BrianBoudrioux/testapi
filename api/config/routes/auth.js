module.exports = function(app)
{
    var AuthController = require("../../controllers/AuthController");

    app.route("/authenticate")
        .post(AuthController.authenticate);
    app.route("/register")
        .post(AuthController.register);
};
