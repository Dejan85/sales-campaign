const { tryCatch } = require("../../utils");
// const {
//   ordersQueries: { deleteById },
// } = require("../../queries/orders");

const { OrdersModel } = require("../../models/orders.models");

exports.deleteById = tryCatch(async (req, res) => {
  const { id } = req.params;

  // const response = await deleteById(id);
  const response = await OrdersModel.findByIdAndRemove(id);

  if (response) {
    return res.status(201).json({
      message: `You successfully delete order with id ${id}`,
    });
  }

  if (!response) {
    throw {
      message: `Order with id ${id} does not exist`,
      statusCode: 400,
    };
  }
});
