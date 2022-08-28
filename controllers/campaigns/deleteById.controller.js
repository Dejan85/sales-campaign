const { tryCatch } = require("../../utils/index");
const {
  campaignsQueries: { deleteById },
} = require("../../queries/campaigns");

exports.deleteById = tryCatch(async (req, res) => {
  const { id } = req.params;
  const response = await deleteById(id);

  if (!!response.affectedRows) {
    return res.status(201).json({
      message: `You successfully delete campaign with id ${id}`,
    });
  }

  if (!!!response.affectedRows) {
    throw {
      message: `Campaign with id ${id} does not exist`,
      statusCode: 400,
    };
  }
});
