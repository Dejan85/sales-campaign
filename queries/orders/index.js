const { create, getAll, deleteById } = require("./orders.query");

exports.ordersQueries = {
  create,
  getAll,
  deleteById,
};
