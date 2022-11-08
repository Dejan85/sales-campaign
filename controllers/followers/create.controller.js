const { tryCatch } = require("../../utils/index");
const {
  campaignsQueries: { create },
} = require("../../queries/campaigns");

const { FollowersModel } = require("../../models/followers.model");

// create campaign
exports.create = tryCatch(async (req, res) => {
  const newCampaigns = new FollowersModel(req.body);
  const response = await newCampaigns.save();

  if (!!response) {
    return res.status(201).json({
      message: "You successfully follow promotions",
    });
  }

  throw {
    message: "Creating follow promotions fail",
  };
});
