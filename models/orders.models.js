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
  phone: {
    type: String,
    required: true,
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
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

exports.OrdersModel = mongoose.model("Orders", ordersSchema);
