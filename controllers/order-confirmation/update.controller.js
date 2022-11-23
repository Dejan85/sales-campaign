const { tryCatch } = require("../../utils");
const { OrdersModel } = require("../../models/orders.models");

exports.update = tryCatch(async (req, res) => {
  const id = req.params.id;

  const order = await OrdersModel.findOne({ id });

  order.confirm = true;

  order.save();

  if (order) {
    return res.status(201).json({
      message: "You successfully confirm order",
    });
  }

  throw {
    message: "Creating orders fail",
  };
});
