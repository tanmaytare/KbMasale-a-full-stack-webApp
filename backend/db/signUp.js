const mongoose = require("mongoose");

const signUpSchema = new mongoose.Schema({
    name: String,
    email: String,
    ph: String,
    id: String,
    pass: String,
});

const SignUpUser = mongoose.model('users', signUpSchema);

module.exports = SignUpUser;
