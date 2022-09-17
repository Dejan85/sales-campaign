const { tryCatch } = require("../../utils");
// const {
//   ordersQueries: { create },
// } = require("../../queries/orders");

const { OrdersModel } = require("../../models/orders.models");

exports.create = tryCatch(async (req, res) => {
  // const response = await create(req.body);

  const newOrder = new OrdersModel(req.body);

  const response = await newOrder.save();

  if (response) {
    return res.status(201).json({
      message: "You successfully create orders",
    });
  }

  throw {
    message: "Creating orders fail",
  };
});
