const express = require("express");
const router = express.Router({ mergeParams: true });
const { protect, authorize } = require("../middleware/auth");
const customQuery = require("../middleware/customQuery");
const Review = require("../model/Review");
const { getReview, getReviews, addReview, updateReview, deleteReview } = require("../controllers/reviews");

router
  .route("/")
  .get(customQuery(Review, { path: "user", select: "name" }), getReviews)
  .post(protect, authorize("user", "admin"), addReview);

router
  .route("/:id")
  .get(getReview)
  .put(protect, authorize("user", "admin"), updateReview)
  .delete(protect, authorize("user", "admin"), deleteReview);

module.exports = router;
