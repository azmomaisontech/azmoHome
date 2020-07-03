const path = require("path");
const express = require("express");
const app = express();
const passport = require("passport");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const fileupload = require("express-fileupload");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const authRoute = require("./routes/auths");
const userRoute = require("./routes/users");
const agencyRoute = require("./routes/agencies");
const propertyRoute = require("./routes/properties");
const reviewRoute = require("./routes/reviews");
require("./config/passport");

// Initialize all var
dotenv.config({ path: "./config/config.env" });

// connect the Database
connectDB();

//Body parser init
app.use(express.json());

//Cookie Session
app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
    maxAge: 1 * 1000
  })
);

//Cookie parser Init
app.use(cookieParser());

// Initiliaze passport
app.use(passport.initialize());
app.use(passport.session());

//File upload Init
app.use(fileupload());

//Sanitize Data
app.use(mongoSanitize());

//Set security headers
app.use(helmet());

//Protect XSS
app.use(xss());

//Limit the number of request per time
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
app.use(limiter);

//Prevent HTTP params polution
app.use(hpp());

//Enable Cors for Public Access
app.use(cors());

//Creating a static folder for file upload
app.use("/uploads", express.static("uploads"));

//Mount the routers
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/agency", agencyRoute);
app.use("/api/v1/properties", propertyRoute);
app.use("/api/v1/reviews", reviewRoute);

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set Static Folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolved(__dirname, "client", "build", "index.html"));
  });
}

// Error Handler Middleware
app.use(errorHandler);

// declare env var
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

// To load server
const server = app.listen(PORT, () => {
  console.log(`Running in ${MODE} Mode, Listening on Port ${PORT}`);
});

// To close the server incase the database is not connecting
process.on("unhandledRejection", err => {
  console.log(err.message);

  server.close(() => {
    process.exit(1);
  });
});

//For testing
module.exports = server;
