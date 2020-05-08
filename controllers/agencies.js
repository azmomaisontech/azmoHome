const path = require("path");
const Agency = require("../model/Agency");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

//@desc      Get all agencies
//@route     GET /api/v1/agency
//@access    Public
exports.getAgencies = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.customQuery);
});

//@desc      Get an agency
//@route     GET /api/v1/agency/:id
//@access    Public
exports.getAgency = asyncHandler(async (req, res, next) => {
  const agency = await Agency.findById(req.params.id).populate("properties");

  if (!agency) return next(new ErrorResponse("Agency with this info, does not exists", 404));

  res.status(200).json({
    success: true,
    data: agency
  });
});

//@desc      Create an agency
//@route     POST /api/v1/agency
//@access    Private/Agent/Admin
exports.createAgency = asyncHandler(async (req, res, next) => {
  //Adding the User ID to the request body to populate the user field
  req.body.user = req.user.id;

  //Check if user has created an agency before
  const createdAgency = await Agency.findOne({ user: req.user.id });
  if (createdAgency && req.user.role !== "admin")
    return next(new ErrorResponse(" Maximum Agency created by User", 400));

  //Create an agency
  const agency = await Agency.create(req.body);

  res.status(201).json({
    success: true,
    data: agency
  });
});

//@desc      Update an agency
//@route     PUT /api/v1/agency/:id
//@access    Private/Agent/Admin
exports.updateAgency = asyncHandler(async (req, res, next) => {
  let agency = await Agency.findById(req.params.id);
  if (!agency) return next(new ErrorResponse("Could not find Agency", 404));

  //Check if user is the owner of the Agency
  if (agency.user.toString() !== req.user.id && req.user.role !== "admin")
    return next(new ErrorResponse(" You cannot perform this task", 403));

  //Update agency
  agency = await Agency.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: agency
  });
});

//@desc      Delete an agency
//@route     DELETE /api/v1/agency/:id
//@access    Private/Agent/Admin
exports.deleteAgency = asyncHandler(async (req, res, next) => {
  let agency = await Agency.findById(req.params.id);

  if (!agency) return next(new ErrorResponse("Could not find Agency", 404));

  //Check if user is the owner of the Agency
  if (agency.user.toString() !== req.user.id && req.user.role !== "admin")
    return next(new ErrorResponse(" You cannot perform this task", 403));

  await agency.remove();
  res.status(200).json({
    success: true
  });
});

//@desc      Upload an agency profile picture
//@route     PUT /api/v1/agency/:id
//@access    Private/Agent/Admin
exports.uploadImage = asyncHandler(async (req, res, next) => {
  const agency = await Agency.findById(req.params.id);

  if (!agency) return next(new ErrorResponse("Could not find Agency", 404));

  //Check if user is the owner of the Agency
  if (agency.user.toString() !== req.user.id && req.user.role !== "admin")
    return next(new ErrorResponse(" You cannot perform this task", 403));

  //Check if there is a file
  if (!req.files) return next(new ErrorResponse("Please upload a file", 400));

  const file = req.files.file;

  //Check if the file is an image
  if (!file.mimetype.startsWith("image")) return next(new ErrorResponse("Please upload an IMAGE file", 400));

  //Check if the file is greater than required
  if (file.size > process.env.MAX_FILE_SIZE)
    return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_SIZE}`, 400));

  //Create custom file name for easy access
  file.name = `photo_${agency._id}${path.parse(file.name).ext}`;

  //Save file to Database
  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.log(err);
      return next(new ErrorResponse("File upload Failed. Try again", 500));
    }

    await Agency.findByIdAndUpdate(req.params.id, { photo: file.name });

    res.status(200).json({
      success: true,
      data: file.name
    });
  });
});
