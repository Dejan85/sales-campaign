const { tryCatch } = require("../../utils/index");
// const {
//   campaignsQueries: { deleteById },
// } = require("../../queries/campaigns");

const { CampaignsModel } = require("../../models/campaigns.model");

exports.deleteById = tryCatch(async (req, res) => {
  const { id } = req.params;
  // const response = await deleteById(id);
  const response = await CampaignsModel.findByIdAndRemove(id);

  if (response) {
    return res.status(201).json({
      message: `You successfully delete campaign with id ${id}`,
    });
  }

  if (!response) {
    throw {
      message: `Campaign with id ${id} does not exist`,
      statusCode: 400,
    };
  }
});
