const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const mongoose = require('mongoose');

const keys = require('./keys');
const User = mongoose.model('user');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LinkedInStrategy({
    clientID: keys.linkedInClientID,
    clientSecret: keys.linkedInClientSecret,
    callbackURL: "/auth/linkedin/callback",
    scope: ['r_emailaddress', 'r_basicprofile'],
    proxy: true
}, function(accessToken, refreshToken, profile, done) {
    User.findOne({linkedinID: profile._json.id})
        .then((user) => {
            if(!user) {
                let user = profile._json;
                new User({
                    emailAddress: user.emailAddress,
                    formattedName: user.formattedName,
                    headline: user.headline,
                    linkedinID: user.id,
                    industry: user.industry,
                    location: user.location.name,
                    pictureUrl: user.pictureUrl,
                    publicProfileUrl: user.publicProfileUrl
                }).save().then((user) => {done(null, user)});
            } else {
                done(null, user);
            }
        });
}));