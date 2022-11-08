const mongoose = require("mongoose");

const followersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

exports.FollowersModel = mongoose.model("Followers", followersSchema);
