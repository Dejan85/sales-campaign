const yup = require("yup");
const { tryCatch } = require("../../../utils");

const schema = yup.object().shape({
  name: yup.string().required("Ime je obavezno"),
  phone: yup.string().required("Telefon je obavezan"),
  email: yup.string().required("Email je obavezan"),
  address: yup.string().required("Adresa je obavezna"),
  // model: yup
  // 	.string()
  // 	.test('is-model-checked', 'Niste odabrali model', value => value !== 'nothingSelect')
  // 	.required(),
  quantity: yup.string().required("Niste odabrali kolicinu"),
  terms: yup.string(),
  wishDiscount: yup.string(),
  message: yup.string(),
  model: yup.string().required("Model je obavezan"),
});

exports.isBodyValid = tryCatch(async (req) => {
  await schema.validate(req.body);
});
