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
  totalNumberOfReservations: {
    type: String,
    require: true,
  },
  currentDiscountLevel: {
    type: String,
    require: true,
  },
  validReservationsRequired: {
    type: String,
    require: true,
  },
  nextLevelOfDiscount: {
    type: String,
    require: true,
  },

  airSmartPrice: {
    type: Number,
    require: true,
  },
  airSmartDiscountPrice: {
    type: Number,
    require: true,
  },
  airSmartDiscountPercent: {
    type: Number,
    require: true,
  },
  airSmartDevicesInStock: {
    type: Number,
    require: true,
  },

  airiOnWhitePrice: {
    type: Number,
    require: true,
  },
  airiOnWhiteDiscountPrice: {
    type: Number,
    require: true,
  },
  airiOnWhiteDiscountPercent: {
    type: Number,
    require: true,
  },
  airiOnWhiteDevicesInStock: {
    type: Number,
    require: true,
  },

  airiOnBlackPrice: {
    type: Number,
    require: true,
  },
  airiOnBlackDiscountPrice: {
    type: Number,
    require: true,
  },
  airiOnBlackDiscountPercent: {
    type: Number,
    require: true,
  },
  airiOnBlackDevicesInStock: {
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
