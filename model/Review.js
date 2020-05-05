const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  text: {
    type: String
  },
  ratings: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Please add a rating between 1 and 5"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  agency: {
    type: mongoose.Schema.ObjectId,
    ref: "Agency",
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true
  }
});

//Prevent users from sending more than one review per agency
ReviewSchema.index({ agency: 1, user: 1 }, { unique: true });

//Static methods to calc avg ratings
ReviewSchema.statics.getAverageRating = async function(agencyId) {
  const obj = await this.aggregate([
    { $match: { agency: agencyId } },
    { $group: { _id: "$agency", averageRating: { $avg: "$ratings" } } }
  ]);

  try {
    await this.model("Agency").findByIdAndUpdate(agencyId, {
      averageRating: Math.ceil(obj[0].averageRating)
    });
  } catch (err) {
    console.error(err);
  }
};

//Calculating the average rating on save
ReviewSchema.post("save", function() {
  this.constructor.getAverageRating(this.agency);
});

//Calculating the average rating on delete/remove
ReviewSchema.pre("remove", function() {
  this.constructor.getAverageRating(this.agency);
});

module.exports = mongoose.model("Review", ReviewSchema);
