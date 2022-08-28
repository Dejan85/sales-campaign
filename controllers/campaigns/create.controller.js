const { tryCatch } = require("../../utils/index");
const {
  campaignsQueries: { create },
} = require("../../queries/campaigns");

// create campaign
exports.create = tryCatch(async (req, res) => {
  const response = await create(req.body);

  if (!!response.affectedRows) {
    return res.status(201).json({
      message: "You successfully create campaign",
    });
  }

  throw {
    message: "Creating campaign fail",
  };
});
