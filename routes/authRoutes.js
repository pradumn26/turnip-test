const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/fetchUser', (req, res) => {
       res.send(req.user);
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/auth/linkedin',
        passport.authenticate('linkedin', { state: 'SOME STATE'  }));

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
        successRedirect: '/',
        failureRedirect: '/'
    }));
};