const { tryCatch } = require("../../utils/index");
const {
  campaignsQueries: { getById },
} = require("../../queries/campaigns");

exports.getById = tryCatch(async (req, res) => {
  const { id } = req.params;

  const campaign = await getById(id);

  if (!!campaign?.length) {
    campaign[0].activity = !!campaign[0].activity;
    campaign[0].expireDate = +campaign[0].expireDate;

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
