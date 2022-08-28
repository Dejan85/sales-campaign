const yup = require("yup");
const { tryCatch } = require("../../../utils");

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  expireDate: yup.number().required("Expire date is required").nullable(),
  activity: yup.boolean(),
  slug: yup.string().required("Slug is required"),
  therapyAirSmartDiscountPrice: yup
    .string()
    .required("Therapy Air Smart discount price is required"),
  therapyAiriOnWhiteDiscountPrice: yup
    .string()
    .required("Therapy Air iOn White discount price is required"),
  therapyAiriOnBlackDiscountPrice: yup
    .string()
    .required("Therapy Air iOn Black discount price is required"),

  therapyAirSmartPrice: yup
    .string()
    .required("Therapy Air Smart price is required"),
  therapyAiriOnWhite: yup
    .string()
    .required("Therapy Air iOn White price is required"),
  therapyAiriOnBlack: yup
    .string()
    .required("Therapy Air iOn Black price is required"),
});

exports.isBodyValid = tryCatch(async (req) => {
  await schema.validate(req.body);
});
