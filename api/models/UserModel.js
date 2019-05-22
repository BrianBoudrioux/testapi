var mongoose = require("mongoose");


var UserSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: 'Enter your family name'
    },
    last_name: {
      type: String,
      required: 'Enter your lastname'
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      required: "Enter you email please",
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
      type: String,
      required: 'Enter your password'
    },
    role: {
      type: Number,
      enum: [1, 2, 3],
      default: 1
    },
    created_date: {
      type: Date,
      default: Date.now
    },

});


module.exports = mongoose.model('User', UserSchema);
