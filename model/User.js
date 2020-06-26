const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"]
    },
    email: {
      type: String,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid Email Address"],
      required: [true, "Please add an email address"],
      unique: true
    },
    role: {
      type: String,
      enum: ["user", "agent"],
      default: "user"
    },
    password: {
      type: String,
      minlength: 5,
      select: false
    },
    googleId: String,
    photo: {
      type: String,
      default: "no-photo.jpg"
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date
  },
  { timestamps: true }
);

// To hash passord before saving
UserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//To return a JWT to a successfully logged in Client
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

// To compare provided password with the hashed password in the DB
UserSchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// To generate reset password token
UserSchema.methods.generateResetPasswordToken = function() {
  const resetToken = crypto.randomBytes(20).toString("hex");

  //   to Hash the token, populate the resetPasswordToken field in the DB
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // to set the resetPasswordExpire Timeframe
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", UserSchema);
