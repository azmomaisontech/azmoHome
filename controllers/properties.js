const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Property = require("../model/Property");
const Agency = require("../model/Agency");
const geocoder = require("../utils/geocoder");

// @desc   Get all properties
// @route  GET /api/v1/properties
// @route GET /api/v1/agency/:agencyId/properties
// @access   Public
exports.getProperties = asyncHandler(async (req, res, next) => {
  if (req.params.agencyId) {
    const agency = await Agency.findById(req.params.agencyId);
    if (!agency) return next(new ErrorResponse("Agency with this info, does not exists", 404));

    const properties = await Property.find({ agency: req.params.agencyId });

    return res.status(200).json({
      success: true,
      count: properties.length,
      data: properties
    });
  } else {
    res.status(200).json(res.customQuery);
  }
});

// @desc   Get a property
// @route  GET /api/v1/properties/:id
// @access   Public
exports.getProperty = asyncHandler(async (req, res, next) => {
  const property = await Property.findById(req.params.id).populate({
    path: "agency",
    select: "name phone email"
  });

  if (!property) return next(new ErrorResponse("Property not found", 404));

  res.status(200).json({
    success: true,
    data: property
  });
});

// @desc   Get a property by distance
// @route  GET /api/v1/properties/searchradius/:area/:distance
// @access  Private/Agent/Admin
exports.getPropertyByDistance = asyncHandler(async (req, res, next) => {
  const { area, distance } = req.params;

  const loc = await geocoder.geocode(area);
  const lng = loc[0].longitude;
  const lat = loc[0].latitude;

  //calculate radius
  //earth radius = 6,378km / 3,963mi
  const radius = distance / 6378;

  //search the database with the calculated params
  const property = await Property.find({
    location: {
      $geoWithin: { $centerSphere: [[lng, lat], radius] }
    }
  });

  res.status(200).json({
    success: true,
    count: property.length,
    data: property
  });
});

// @desc   Add a property
// @route  POST /api/v1/properties
// @route POST /api/v1/agency/:agencyId/properties
// @access  Private/Agent/Admin
exports.addProperty = asyncHandler(async (req, res, next) => {
  req.body.agency = req.params.agencyId;
  req.body.user = req.user.id;
  const agency = await Agency.findById(req.params.agencyId);

  //check if agency exists with the id
  if (!agency) return next(new ErrorResponse("Agency with this info, does not exists", 404));

  //Check if user is the owner of the Agency
  if (agency.user.toString() !== req.user.id && req.user.role !== "admin")
    return next(new ErrorResponse(" You cannot perform this task", 403));

  const property = await Property.create(req.body);

  res.status(201).json({
    success: true,
    data: property
  });
});

// @desc   Update a property
// @route  PUT /api/v1/properties/:id
// @access  Private/Agent/Admin
exports.updateProperty = asyncHandler(async (req, res, next) => {
  let property = await Property.findById(req.params.id);

  if (!property) return next(new ErrorResponse("Property does not exist", 404));

  //Check if user is the owner of the property or an admin
  if (property.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse("You cannot perform this task", 403));
  }

  //Update property
  property = await Property.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: property
  });
});

// @desc   Delete a property
// @route  DELETE /api/v1/properties/:id
// @access  Private/Agent/Admin
exports.deleteProperty = asyncHandler(async (req, res, next) => {
  let property = await Property.findById(req.params.id);

  if (!property) return next(new ErrorResponse("Property does not exist", 404));

  //Check if user is the owner of the property or an admin
  if (property.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse("You cannot perform this task", 403));
  }

  //Delete property
  await property.remove();

  res.status(200).json({
    success: true
  });
});

// @Desc Upload Property Pictures to Database
//Route Put /api/v1/properties/:id/photo
//Access Private/Admin/Agent
exports.uploadPhoto = asyncHandler(async (req, res, next) => {
  const property = await Property.findById(req.params.id);
  if (!property) return next(new ErrorResponse("Property does not exist", 404));

  //Check if user is the owner of the property or an admin
  if (property.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse("You cannot perform this task", 403));
  }

  //Check if there is a file
  if (!req.files) return next(new ErrorResponse(`Please upload a file`, 400));

  const file = req.files.file;

  //Check if the file is an image
  if (!file.mimetype.startsWith("image")) {
    return next(new ErrorResponse(`Please upload an image file`, 400));
  }

  //Check if the file is greater than pre-set file size
  if (file.size > process.env.MAX_FILE_SIZE) {
    return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_SIZE}`, 400));
  }

  //Create custom file name
  file.name = `photo_${property._id}_${Math.random()}${path.parse(file.name).ext}`;

  //Save file to Database
  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse("File upload Failed. Try again", 500));
    }

    const photo = [...property.photo];
    photo.push(file.name);

    await Property.findByIdAndUpdate(req.params.id, { photo });

    res.status(200).json({
      success: true,
      data: file.name
    });
  });
});
