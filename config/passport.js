const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const GoogleUser = require("../model/GoogleUser");

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/auth/google/redirect",
      clientID: process.env.GOOGLE_API_KEY,
      clientSecret: process.env.GOOGLE_API_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id, displayName, emails, photos } = profile;
      try {
        let user = await GoogleUser.findOne({ googleId: id });
        if (user) return done(null, user);
        user = await GoogleUser.create({
          name: displayName,
          email: emails[0].value,
          googleId: id,
          photo: photos[0].value
        });
        done(null, user);
      } catch (err) {
        console.log(err);
        done();
      }
    }
  )
);
