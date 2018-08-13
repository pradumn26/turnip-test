const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./util/keys');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieSession({
    maxAge: 30*24*3600*1000,
    keys: ['jsndjfksdnf']
}));
app.use(passport.initialize());
app.use(passport.session());

require('./util/User');
require('./util/passportUtil');
require('./routes/authRoutes')(app);

app.listen(4000, () => {
    console.log(`app is hosted on: ${4000}`);
});