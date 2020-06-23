const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const GoogleUserSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  role: {
    type: String,
    default: "user"
  }
});

//To return a JWT to a successfully logged in Client
GoogleUserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

module.exports = mongoose.model("GoogleUser", GoogleUserSchema);
