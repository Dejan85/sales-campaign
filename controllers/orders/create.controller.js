const { tryCatch } = require("../../utils");
const {
  ordersQueries: { create },
} = require("../../queries/orders");

exports.create = tryCatch(async (req, res) => {
  const response = await create(req.body);

  if (!!response.affectedRows) {
    return res.status(201).json({
      message: "You successfully create orders",
    });
  }

  throw {
    message: "Creating orders fail",
  };
});
