module.exports = function(app)
{
    var AuthController = require("../controllers/AuthController.js");

    app.route("/authenticate")
        .post(AuthController.authenticate);
};
