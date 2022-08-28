const { tryCatch } = require("../../utils/index");
const {
  campaignsQueries: { getAll, update },
} = require("../../queries/campaigns");

exports.update = tryCatch(async (req, res) => {
  const { id } = req.params;

  const campaign = await getAll(id);

  if (!!!campaign.length) {
    throw {
      message: `Campaign with id ${id} does not exist`,
      statusCode: 404,
      data: [],
    };
  }

  const response = await update(id, req.body);

  if (!!response.affectedRows) {
    return res.status(201).json({
      message: "You updated campaign successfully",
    });
  }

  if (!!!response.affectedRows) {
    throw {
      statusCode: 400,
      message: "You cant update campaign",
    };
  }
});
