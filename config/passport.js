const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models")

passport.use(new LocalStrategy(
    {
        usernameField: "email"
    }, function (email, password, done) {
        db.User.findOne({
            $where: { email }
        }).then(function (dbUser) {
            console.log(dbUser)
            // If there's no user with the given email
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            else if (!dbUser.validPassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            // If none of the above, return the user
            return done(null, dbUser, {
                message: "Correct email and password"
            });
        })
    }
));

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

module.exports = passport;