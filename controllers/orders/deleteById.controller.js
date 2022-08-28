const { tryCatch } = require("../../utils");
const {
  ordersQueries: { deleteById },
} = require("../../queries/orders");

exports.deleteById = tryCatch(async (req, res) => {
  const { id } = req.params;

  const response = await deleteById(id);

  if (!!response.affectedRows) {
    return res.status(201).json({
      message: `You successfully delete order with id ${id}`,
    });
  }

  if (!!!response.affectedRows) {
    throw {
      message: `Order with id ${id} does not exist`,
      statusCode: 400,
    };
  }
});
