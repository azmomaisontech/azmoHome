const express = require("express");
const router = express.Router();
const passport = require("passport");
const { protect } = require("../middleware/auth");

const {
  signInWithGoogle,
  registerUser,
  loginUser,
  getUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  updateUserName,
  updateUserPassword,
  deleteUser
} = require("../controllers/auths");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/redirect", passport.authenticate("google"), signInWithGoogle);
router.post("/register", registerUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);
router.get("/logout", logoutUser);
router.post("/forgotpassword", forgotPassword);
router.put("/resetpassword/:resettoken", resetPassword);
router.put("/updatedetails", protect, updateUserName);
router.put("/updatepassword", protect, updateUserPassword);
router.delete("/removeaccount", protect, deleteUser);

module.exports = router;
