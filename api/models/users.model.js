const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    provider        : String,
    email           : String,
    id              : String,
    displayName     : String,
    token           : String,
    imgURL   		: String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);