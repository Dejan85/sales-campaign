const mongoose = require("mongoose");

const campaignsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  expireDate: {
    type: Number,
    required: true,
  },
  activity: {
    type: Boolean,
    require: true,
  },
  slug: {
    type: String,
    require: true,
  },
  therapyAirSmartPrice: {
    type: Number,
    require: true,
  },
  therapyAirSmartDiscountPrice: {
    type: Number,
    require: true,
  },
  therapyAiriOnWhite: {
    type: Number,
    require: true,
  },
  therapyAiriOnWhiteDiscountPrice: {
    type: Number,
    require: true,
  },
  therapyAiriOnBlack: {
    type: Number,
    require: true,
  },
  therapyAiriOnBlackDiscountPrice: {
    type: Number,
    require: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

exports.CampaignsModel = mongoose.model("Campaigns", campaignsSchema);
