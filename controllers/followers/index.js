const { create } = require("./create.controller");
const { getAll } = require("./getAll.controller");
const { deleteById } = require("./deleteById.controller");
exports.followersController = {
  create,
  getAll,
  deleteById,
};
