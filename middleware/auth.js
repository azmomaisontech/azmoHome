const jwt = require("jsonwebtoken");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../model/User");

exports.protect = asyncHandler(async (req, res, next) => {
  const auth = req.cookies;
  let token;

  //This function decodes the token provided by
  //the user, checks if correct.
  const verifyToken = async () => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      return next();
    } catch (err) {
      return next(new ErrorResponse("Unauthorized Access", 401));
    }
  };

  if (auth.token) {
    //If User is signed in with Local Auth
    //by providing Username and password
    token = auth.token;
    verifyToken();
  } else if (req.headers.authorization) {
    //This is just for the test suites
    //Had troubles handling cookies with supertest,
    //so used Authorization headers instead
    token = req.headers.authorization.split(" ")[1];
    verifyToken();
  } else if (auth.session) {
    //If User is signed in with Google OAuth
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
