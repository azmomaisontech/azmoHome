const express = require("express");
const router = express.Router();
const Agency = require("../model/Agency");
const customQuery = require("../middleware/customQuery");
const { protect, authorize } = require("../middleware/auth");
const properties = require("./properties");
const reviews = require("./reviews");
const {
  getAgencies,
  getAgency,
  updateAgency,
  uploadImage,
  createAgency,
  deleteAgency
} = require("../controllers/agencies");

router
  .route("/")
  .get(customQuery(Agency, "properties"), getAgencies)
  .post(protect, authorize("agent", "admin"), createAgency);

router
  .route("/:id")
  .get(getAgency)
  .put(protect, authorize("agent", "admin"), updateAgency)
  .delete(protect, authorize("agent", "admin"), deleteAgency);

router.route("/:id/photo").put(protect, authorize("agent", "admin"), uploadImage);

// @Desc to get properties for an agency
// route /api/v1/agency/:agencyId/properties
// access Public
router.use("/:agencyId/properties", properties);

// // @Desc to get reviews for an agency
// // route /api/v1/agency/:agencyId/reviews
// // access Public
router.use("/:agencyId/reviews", reviews);

module.exports = router;
