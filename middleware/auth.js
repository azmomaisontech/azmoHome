const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../model/User");

exports.protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies;

  //Check if there is any cookies called token
  //This will exist if user is logged in with local auth
  //or if user has used google oauth before now.
  if (token.token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      return next();
    } catch (err) {
      return next(new ErrorResponse("Unauthorized Access", 401));
    }
  } //For first time google auth users
  else if (token.session) {
    req.googleAuth = true;
    return next();
  } else return next(new ErrorResponse("Unauthorized Access", 401));
});

exports.authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role))
    return next(
      new ErrorResponse(
        "You cannot perform this function. Contact Admin to switch to the appropriate role required.",
        403
      )
    );

  next();
};
