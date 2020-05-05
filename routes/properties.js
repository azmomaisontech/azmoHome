const express = require("express");
const router = express.Router({ mergeParams: true });
const customQuery = require("../middleware/customQuery");
const { protect, authorize } = require("../middleware/auth");
const Property = require("../model/Property");

const {
  getProperties,
  getProperty,
  addProperty,
  deleteProperty,
  updateProperty,
  uploadPhoto,
  getPropertyByDistance
} = require("../controllers/properties");

router
  .route("/")
  .get(customQuery(Property, { path: "agency", select: "name phone email" }), getProperties)
  .post(protect, authorize("admin", "agent"), addProperty);

router
  .route("/:id")
  .get(getProperty)
  .put(protect, authorize("agent", "admin"), updateProperty)
  .delete(protect, authorize("agent", "admin"), deleteProperty);

router.route("/searchradius/:area/:distance").get(getPropertyByDistance);

router.route("/:id/photo").put(protect, authorize("agent", "admin"), uploadPhoto);

module.exports = router;
