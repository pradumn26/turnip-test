const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    emailAddress: String,
    formattedName: String,
    headline: String,
    linkedinID: String,
    industry: String,
    location: String,
    pictureUrl: String,
    publicProfileUrl: String
});

mongoose.model('user', userSchema);