const mongoose = require("mongoose");
const slugify = require("slugify");

const AgencySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"]
    },
    slug: String,
    description: {
      type: String,
      required: [true, "Please add a description"],
      maxlength: [500, "Descrption cannot be more than 500 characters"]
    },
    specialties: {
      type: [String],
      required: true,
      enum: ["Buyer's Agent", "Listing Agent", "Relocation", "Consulting", "Property Management", "Other"]
    },

    photo: {
      type: String,
      default: "no-photo.jpg"
    },
    address: {
      type: String
    },
    website: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "Please add a valid URL e.g https://www.localhost.com"
      ]
    },
    phone: {
      type: String,
      maxlength: [20, "Phone number cannot be longer than 20 characters"]
    },
    email: {
      type: String,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please add a valid email"]
    },
    averageRating: {
      type: Number,
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating cannot be more than 5"]
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
  }
);

//Slug
AgencySchema.pre("save", function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// Delete all properties associated with this agency when the agency is deleted
AgencySchema.pre("remove", async function(next) {
  await this.model("Property").deleteMany({ agency: this._id });
  await this.model("Review").deleteMany({ agency: this._id });
  next();
});

//Reverse populate the Virtual Properties
AgencySchema.virtual("properties", {
  ref: "Property",
  localField: "_id",
  foreignField: "agency",
  justOne: false
});

module.exports = mongoose.model("Agency", AgencySchema);
