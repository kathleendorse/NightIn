const passport = require("passport");
const LocalStrategy = require("./localStrategy");
const User = require("../models/user");

// called on login, saves the id to session req.session.passport.user = {id:'..'}
passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

// user object attaches to the request as req.user
passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      email: user.email,
      isAdmin: user.isAdmin,
      id: user._id,
      //added
      favs: user.favs
    };
    cb(err, userInformation);
  });
});

passport.use(LocalStrategy);

module.exports = passport;
