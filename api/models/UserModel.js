var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
    email : {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true, unique: true},
    password: {type: String, required: true}

});


module.exports = mongoose.model('User', UserSchema);
