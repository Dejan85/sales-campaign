const { tryCatch } = require("../../utils");
const {
  ordersQueries: { getAll },
} = require("../../queries/orders");

exports.getAll = tryCatch(async (req, res) => {
  const orders = await getAll();

  if (!!orders.length) {
    return res.status(200).json({
      message: "You get all orders",
      data: orders,
    });
  } else {
    throw {
      message: "There are no any orders",
      statusCode: 404,
    };
  }
});
