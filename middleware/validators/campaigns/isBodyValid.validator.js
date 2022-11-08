const yup = require("yup");
const { tryCatch } = require("../../../utils");

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  expireDate: yup.number().required("Expire Date is required").nullable(),
  activity: yup.boolean(),
  slug: yup.string().required("Slug is required"),
  totalNumberOfReservations: yup
    .string()
    .required("Total number of reservations is required"),
  currentDiscountLevel: yup
    .string()
    .required("Current discount level is required"),
  validReservationsRequired: yup
    .string()
    .required("Valid reservations required is required"),
  nextLevelOfDiscount: yup
    .string()
    .required("Next level of discount is required"),

  airSmartPrice: yup.string().required("Therapy Air Smart price is required"),
  airSmartDiscountPrice: yup
    .string()
    .required("Therapy Air Smart discount price is required"),
  airSmartDiscountPercent: yup
    .string()
    .required("Therapy Air Smart discount is required"),
  airSmartDevicesInStock: yup
    .string()
    .required("Therapy Air Smart devices in stock is required"),

  airiOnWhitePrice: yup
    .string()
    .required("Therapy air iOn white price is required"),
  airiOnWhiteDiscountPrice: yup
    .string()
    .required("Therapy air iOn white discount price is required"),
  airiOnWhiteDiscountPercent: yup
    .string()
    .required("Therapy air iOn white discount is required"),
  airiOnWhiteDevicesInStock: yup
    .string()
    .required("Therapy air iOn white devices in stock is required"),

  airiOnBlackPrice: yup
    .string()
    .required("Therapy air iOn Black price is required"),
  airiOnBlackDiscountPrice: yup
    .string()
    .required("Therapy air iOn Black discount price is required"),
  airiOnBlackDiscountPercent: yup
    .string()
    .required("Therapy air iOn Black discount is required"),
  airiOnBlackDevicesInStock: yup
    .string()
    .required("Therapy air iOn Black devices in stock is required"),
});

exports.isBodyValid = tryCatch(async (req) => {
  await schema.validate(req.body);
});
