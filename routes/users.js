const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/auth");
const customQuery = require("../middleware/customQuery");
const User = require("../model/User");

const { getUser, getUsers, createUser, updateUser, deleteUser } = require("../controllers/users");

router
  .route("/")
  .get(protect, authorize("admin"), customQuery(User), getUsers)
  .post(protect, authorize("admin"), createUser);

router
  .route("/:id")
  .get(protect, authorize("admin"), getUser)
  .put(protect, authorize("admin"), updateUser)
  .delete(protect, authorize("admin"), deleteUser);

module.exports = router;
