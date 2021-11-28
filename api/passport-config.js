// eslint-disable-next-line
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Users = require('./models/users');

function initialize(passport) {
    const authenticateUser = ((email, password, done) => {
        Users.findOne({ email }).then(user => {
            if (!user) return done(null, false, { message: 'user doesn\'t exist.' });
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                }
                return done(null, false, { message: 'Password incorrect' });
            });
        });
    });

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => Users.findOne({ id }, (err, user) => {
        if (err) return done(err);
        return done(null, { user });
    }));
}

module.exports = initialize;
