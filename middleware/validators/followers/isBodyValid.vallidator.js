const yup = require("yup");
const { tryCatch } = require("../../../utils");

const schema = yup.object().shape({
  email: yup.string().required("Email je obavezan"),
});

exports.isBodyValid = tryCatch(async (req) => {
  await schema.validate(req.body);
});
