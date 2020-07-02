const crypto = require("crypto");
const User = require("../model/User");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const emailSender = require("../utils/emailSender");

// @Desc Login with google+
// @Route POST  /api/v1/auth/google
// @access Public
exports.loginWithGoogle = asyncHandler(async (req, res, next) => {
  res.redirect("http://localhost:3000/");
});

// @Desc Register a new User
// @Route POST  /api/v1/auth/register
// @access Public
exports.registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role
  });

  sendTokenResponse(user, 201, res);
});

// @Desc Login a new User
// @Route POST  /api/v1/auth/login
// @access Public
exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  //check if fields are empty
  if (!email || !password) return next(new ErrorResponse("Please enter email and password", 401));

  //check if emailaddress match
  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorResponse("Invalid Username or Password", 401));

  // check if password match
  const isMatch = await user.comparePassword(password);
  if (!isMatch) return next(new ErrorResponse("Invalid Username or Password", 401));

  // If request passes every validation
  sendTokenResponse(user, 200, res);
});

// @Desc Get a User
// @Route GET  /api/v1/auth/me
// @access Private
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("-__v");
  if (req.googleAuth) {
    sendTokenResponse(user, 200, res);
  } else {
    res.status(200).json({
      success: true,
      data: user
    });
  }
});

// @Desc Log out a User
// @Route GET  /api/v1/auth/logout
// @access Private
exports.logoutUser = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: "User logged out"
  });
});

// @Desc Forgot Password
// @Route POST  /api/v1/auth/forgotpassword
// @access Public
//Not Yet Testing both using Manual and Automated
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new ErrorResponse("User not found with the email provided", 404));

  //Get reset Token
  const resetToken = user.generateResetPasswordToken();

  await user.save({
    validateBeforeSave: false
  });

  const resetUrl = `${req.protocol}://${req.get("host")}/api/v1/auth/resetpassword/${resetToken}`;

  const message = `You are receiving this email because you (or someone else) has requested to reset your password. Please click the link below. NOTE: Url expires in 10 minutes \n\n ${resetUrl}`;

  try {
    await emailSender({ message, subject: "Password Reset Token", email: user.email });
    res.status(200).json({
      success: true,
      data: "Email sent"
    });
  } catch (err) {
    console.error(err);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({
      validateBeforeSave: false
    });

    return next(new ErrorResponse("Failed to send Email", 500));
  }
});

// @Desc Reset Password
// @Route PUT  /api/v1/auth/resetpassword/:resettoken
// @access Private
//Not Yet Testing both using Manual and Automated
exports.resetPassword = asyncHandler(async (req, res, next) => {
  // Hash the token to be able to compare it with the one in the DB
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.resettoken)
    .digest("hex");

  const user = await User.findOne({ resetPasswordToken, resetPasswordExpire: { $gt: Date.now() } });

  if (!user) return next(new ErrorResponse("Invalid Token or Token may have expired", 400));

  //Set new password for user
  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendTokenResponse(user, 200, res);
});

// @Desc Update a user's Name
// @Route PUT  /api/v1/auth/updatedetails
// @access Private
exports.updateUserName = asyncHandler(async (req, res, next) => {
  let fieldToUpdate;

  // I want the user to be able to change just the name or the email or both
  if (req.body.name && req.body.email) {
    fieldToUpdate = {
      name: req.body.name,
      email: req.body.email
    };
  } else if (req.body.name && !req.body.email) {
    fieldToUpdate = {
      name: req.body.name
    };
  } else {
    fieldToUpdate = {
      email: req.body.email
    };
  }

  const user = await User.findByIdAndUpdate(req.user.id, fieldToUpdate, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: user
  });
});

// @Desc Update a user's password
// @Route PUT  /api/v1/auth/updatepassword
// @access Private
exports.updateUserPassword = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  // check current password provided by the user if it matches the one in the DB
  if (!(await user.comparePassword(req.body.currentPassword)))
    return next(new ErrorResponse("Password is incorrect", 401));

  user.password = req.body.newPassword;

  await user.save();

  sendTokenResponse(user, 200, res);
});

// @Desc Delete a user
// @Route DELETE  /api/v1/auth/removeaccount
// @access Private
exports.deleteUser = asyncHandler(async (req, res, next) => {
  await User.findByIdAndDelete(req.user.id);

  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: "User removed"
  });
});

//Send a cookie to the Client
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXP * 24 * 60 * 60 * 1000),
    httpOnly: true
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      data: user,
      token
    });
};
