const { tryCatch } = require("../../utils/index");
// const {
//   campaignsQueries: { getBySlug },
// } = require("../../queries/campaigns");

const { CampaignsModel } = require("../../models/campaigns.model");

exports.getBySlug = tryCatch(async (req, res) => {
  const { slug } = req.params;
  // const campaign = await getBySlug(slug);

  const campaign = await CampaignsModel.find({ slug });

  if (campaign?.length !== 0) {
    return res.status(200).json({
      message: `You find one campaign with this slug ${slug}`,
      data: campaign,
    });
  } else {
    throw {
      message: `You didn't find campaign with this slug ${slug}`,
      statusCode: 404,
      data: campaign,
    };
  }
});
