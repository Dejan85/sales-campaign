const { tryCatch } = require("../../utils/index");
// const {
//   campaignsQueries: { getById },
// } = require("../../queries/campaigns");

const { CampaignsModel } = require("../../models/campaigns.model");

exports.getById = tryCatch(async (req, res) => {
  const { id } = req.params;

  // const campaign = await getById(id);

  const campaign = await CampaignsModel.findById(id);

  if (campaign?.length !== 0) {
    return res.status(200).json({
      message: `You find one campaign with this id ${id}`,
      data: campaign,
    });
  } else {
    throw {
      message: `You didn't find campaign with this id ${id}`,
      statusCode: 404,
      data: campaign,
    };
  }
});
