const { tryCatch } = require("../../utils");

exports.isEmailExist = tryCatch(async (req) => {
  const { email } = req.body;

  if (email === "undefined") {
    throw {
      message: "You must send email in body",
      statusCode: 404,
    };
  }
});
