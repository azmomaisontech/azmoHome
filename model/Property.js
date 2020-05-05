const mongoose = require("mongoose");
const slugify = require("slugify");
const geocoder = require("../utils/geocoder");

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please add a name"]
  },
  description: {
    type: String,
    required: [true, "Please add a brief description of the property"]
  },
  photo: {
    type: [String]
  },
  slug: String,
  address: {
    type: String,
    required: [true, "Please add an address"]
  },
  location: {
    //GeoJSON Point
    type: {
      type: String,
      enum: ["Point"]
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    },
    formattedAddress: String
  },
  size: Number,
  bedroom: {
    type: Number,
    required: [true, "Please enter the number of bedrooms"]
  },
  bathroom: {
    type: Number,
    required: [true, "Please enter the number of bathrooms"]
  },
  garage: {
    type: Number,
    required: [true, "Please enter the number of cars it can contain"]
  },
  price: {
    type: String,
    required: [true, "Please enter the cost of the property"]
  },
  luxuryAddOn: String,
  addedAt: {
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

// Slug
PropertySchema.pre("save", function(next) {
  this.slug = slugify(this.address, { lower: true });
  next();
});

//GeoCoder
PropertySchema.pre("save", async function(next) {
  const loc = await geocoder.geocode(this.address);
  this.location = {
    type: "Point",
    coordinates: [loc[0].longitude, loc[0].latitude],
    formattedAddress: loc[0].formattedAddress
  };

  next();
});

module.exports = mongoose.model("Property", PropertySchema);
