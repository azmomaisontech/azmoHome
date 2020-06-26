const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../model/User");

// To send out to the browser
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//Receiving the id back from the browser
passport.deserializeUser(async (id, done) => {
  try {
    let user = await User.findById(id);
    done(null, user);
  } catch (err) {
    console.log(err);
    done(err);
  }
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/api/v1/auth/google/redirect",
      clientID: process.env.GOOGLE_API_KEY,
      clientSecret: process.env.GOOGLE_API_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails, photos } = profile;
      try {
        let user = await User.findOne({ googleId: id });
        if (user) {
          return done(null, user);
        } else {
          let newUser = await User.create({
            googleId: id,
            name: displayName,
            email: emails[0].value,
            photo: photos[0].value
          });
          done(null, newUser);
        }
      } catch (err) {
        console.log(err);
        done(err);
      }
    }
  )
);
