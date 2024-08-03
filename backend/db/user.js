const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    ph: String,
    msg: String,
});

const User = mongoose.model('quries', userSchema);

module.exports = User;
