const { tryCatch } = require("../../utils/index");
const { FollowersModel } = require("../../models/followers.model");

exports.deleteById = tryCatch(async (req, res) => {
  const { id } = req.params;
  const response = await FollowersModel.findByIdAndRemove(id);

  if (response) {
    return res.status(201).json({
      message: `You successfully delete follower with id ${id}`,
    });
  }

  if (!response) {
    throw {
      message: `Follower with id ${id} does not exist`,
      statusCode: 400,
    };
  }
});
