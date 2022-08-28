const { create } = require("./create.controller");
const { getAll } = require("./getAll.controller");
const { getById } = require("./getById.controller");
const { getBySlug } = require("./getBySlug.controller");
const { update } = require("./update.controller");
const { deleteById } = require("./deleteById.controller");

exports.campaignsController = {
  create,
  getAll,
  getById,
  getBySlug,
  update,
  deleteById,
};
