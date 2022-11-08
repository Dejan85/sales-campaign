const { tryCatch } = require("../../utils/index");

const { FollowersModel } = require("../../models/followers.model");

// create campaign
exports.getAll = tryCatch(async (req, res) => {
  const followers = await FollowersModel.find({}, { created: 0, __v: 0 });

  console.log("test followers", followers);

  if (followers) {
    return res.status(201).json({
      message: "You successfully get all followers",
      data: followers,
    });
  }

  throw {
    message: "You didn't find any followers",
    statusCode: 404,
    data: [],
  };
});
