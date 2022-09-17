const { tryCatch } = require("../../utils/index");
// const {
//   campaignsQueries: { getAll, update },
// } = require("../../queries/campaigns");

const { CampaignsModel } = require("../../models/campaigns.model");

exports.update = tryCatch(async (req, res) => {
  const { id } = req.params;

  // const campaign = await getAll(id);

  const response = await CampaignsModel.findByIdAndUpdate(id, req.body);

  console.log("test response", response);

  if (!response) {
    throw {
      message: `Campaign with id ${id} does not exist`,
      statusCode: 404,
      data: [],
    };
  }

  // const response = await update(id, req.body);

  if (response) {
    return res.status(201).json({
      message: "You updated campaign successfully",
    });
  }

  // if (!!!response.affectedRows) {
  //   throw {
  //     statusCode: 400,
  //     message: "You cant update campaign",
  //   };
  // }
});
