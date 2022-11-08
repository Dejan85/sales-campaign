const { tryCatch } = require("../../utils/index");
// const {
//   campaignsQueries: { getAll },
// } = require("../../queries/campaigns");

const { CampaignsModel } = require("../../models/campaigns.model");

exports.getAll = tryCatch(async (req, res) => {
  // const campaigns = await getAll();

  const campaigns = await CampaignsModel.find({}, { created: 0, __v: 0 });

  if (!!campaigns?.length) {
    campaigns.forEach((campaign) => {
      campaign.activity = !!campaign.activity;
      campaign.expireDate = +campaign.expireDate;
    });

    return res.status(200).json({
      message: "You get all campaigns",
      data: campaigns,
    });
  } else {
    throw {
      message: "You didn't find any campaigns",
      statusCode: 404,
      data: [],
    };
  }
});
