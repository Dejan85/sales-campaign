const { tryCatch } = require("../../utils/index");
const {
  campaignsQueries: { getBySlug },
} = require("../../queries/campaigns");

exports.getBySlug = tryCatch(async (req, res) => {
  const { slug } = req.params;
  const campaign = await getBySlug(slug);

  if (!!campaign?.length) {
    campaign[0].activity = !!campaign[0].activity;
    campaign[0].expireDate = +campaign[0].expireDate;

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
