const { create } = require("./create.controller");
const { update } = require("./update.controller");

exports.orderConfirmation = {
  create,
  update,
};
