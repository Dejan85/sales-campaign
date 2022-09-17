const { tryCatch } = require("../../utils/index");
const {
  campaignsQueries: { create },
} = require("../../queries/campaigns");

const { CampaignsModel } = require("../../models/campaigns.model");

// create campaign
exports.create = tryCatch(async (req, res) => {
  // const response = await create(req.body);
  const newCampaigns = new CampaignsModel(req.body);

  const response = await newCampaigns.save();

  if (!!response) {
    return res.status(201).json({
      message: "You successfully create campaign",
    });
  }

  throw {
    message: "Creating campaign fail",
  };
});
