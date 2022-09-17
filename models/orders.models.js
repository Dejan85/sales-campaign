const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  terms: {
    type: String,
  },
  wishDiscount: {
    type: Number,
  },
  message: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

exports.OrdersModel = mongoose.model("Orders", ordersSchema);
