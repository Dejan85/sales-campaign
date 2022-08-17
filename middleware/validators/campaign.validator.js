const yup = require("yup");
const { tryCatch } = require("../../utils");

exports.isBodyValid = tryCatch(async (req) => {
  const { name, slug, dateFrom, dateTo, active, promotionsGroup } = req.body;
  const schema = yup.object().shape({
    name: yup.string().required("The name field is required"),
    slug: yup.string().required("The slug field is required"),
    dateFrom: yup.string().required("The dateFrom field is required"),
    dateTo: yup.string().required("The dateTo field is required"),
    active: yup.bool().required("The active field is required"),
    promotionsGroup: yup
      .string()
      .required("The promotionsGroup field is required"),
    price: yup.number().required("The price field is required"),
  });
  await schema.validate({
    name,
    slug,
    dateFrom,
    dateTo,
    active,
    promotionsGroup,
    price,
  });
});
