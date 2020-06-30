const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const Review = require("../model/Review");
const Agency = require("../model/Agency");

//@desc      Get all Reviews
//@route     GET /api/v1/reviews
// @route GET /api/v1/agency/:agencyId/reviews
//@access    Public
exports.getReviews = asyncHandler(async (req, res, next) => {
  if (req.params.agencyId) {
    const agency = await Agency.findById(req.params.agencyId);
    if (!agency) return next(new ErrorResponse("Agency with this info, does not exists", 404));

    const reviews = await Review.find({ agency: req.params.agencyId }).populate({
      path: "user",
      select: "name"
    });

    return res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews
    });
  } else {
    res.status(200).json(res.customQuery);
  }
});

//@desc      Get A Review
//@route     GET /api/v1/reviews/:id
//@access    Public
exports.getReview = asyncHandler(async (req, res, next) => {
  const review = await Review.findById(req.params.id).populate({
    path: "user",
    select: "name"
  });

  if (!review) return next(new ErrorResponse("Review not found", 404));

  res.status(200).json({
    success: true,
    data: review
  });
});

//@desc      Add a Review
//@route     POST /api/v1/agency/:agencyId/reviews
//@access    Private/Admin/User
exports.addReview = asyncHandler(async (req, res, next) => {
  req.body.agency = req.params.agencyId;
  req.body.user = req.user.id;

  const agency = await Agency.findById(req.params.agencyId);

  if (!agency) return next(new ErrorResponse("Agency with this info, does not exists", 404));

  const review = await Review.create(req.body);

  res.status(200).json({
    success: true,
    data: review
  });
});

//@desc      Update a Review
//@route     PUT /api/v1/reviews/:id
//@access    Private/Admin/User
exports.updateReview = asyncHandler(async (req, res, next) => {
  let review = await Review.findById(req.params.id);

  if (!review) return next(new ErrorResponse("Review not found", 404));

  //Make sure review belongs to logged in user
  if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse("You cannot perform this task", 403));
  }

  review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  }).populate({
    path: "user",
    select: "name"
  });

  res.status(200).json({
    success: true,
    data: review
  });
});

//@desc      Delete a Review
//@route     DELETE /api/v1/reviews/:id
//@access    Private/Admin/User
exports.deleteReview = asyncHandler(async (req, res, next) => {
  let review = await Review.findById(req.params.id);

  if (!review) return next(new ErrorResponse("Review not found", 404));

  //Make sure review belongs to logged in user
  if (review.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(new ErrorResponse("You cannot perform this task", 403));
  }

  await review.remove();

  res.status(200).json({
    success: true,
    data: "Review removed"
  });
});
