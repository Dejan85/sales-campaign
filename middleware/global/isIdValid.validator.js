const { tryCatch } = require("../../utils");

exports.isIdValid = tryCatch(async (req) => {
  const { id } = req.params;

  if (id === "undefined") {
    throw {
      message: "You must send id in params",
      statusCode: 404,
    };
  }
});
