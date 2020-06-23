const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../model/User");
const GoogleUser = require("../model/GoogleUser");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) return next(new ErrorResponse("Unauthorized Access", 401));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (req.headers.google) {
      req.user = await GoogleUser.findById(decoded.id);
    } else {
      req.user = await User.findById(decoded.id);
    }

    next();
  } catch (err) {
    return next(new ErrorResponse("Unauthorized Access", 401));
  }
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
