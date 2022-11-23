const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
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
  model: {
    type: String,
  },
  wishDiscount: {
    type: Number,
  },
  message: {
    type: String,
  },
  confirm: {
    type: Boolean,
    default: false,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

exports.OrdersModel = mongoose.model("Orders", ordersSchema);
