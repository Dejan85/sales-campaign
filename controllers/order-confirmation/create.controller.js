const { tryCatch } = require("../../utils/index");
const nodemailer = require("nodemailer");

// create campaign
exports.create = tryCatch(async (req, res) => {
  const { email, id, model, quantity } = req.body;

  console.log("test process.env.USER", process.env.USER);

  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const details = {
    // from: "specijalna.ponuda.in.rs@gmail.com",
    from: process.env.USER,
    to: `${email}`,
    subject: "Verifikacioni email - Specijalna ponuda",
    html: `<div> <p>Poštovani, u nastavku se nalazi link za potvrdu rezervacije ${model} ${quantity} uređaja.</p></br><p>Link za potvrdu rezervacije: https://specijalna-ponuda.in.rs/order-confirm.html?${id}</p></div>`,
  };

  mailTransporter.sendMail(details, (err) => {
    console.log("test details", details);
    console.log("test mailTransporter", mailTransporter);

    if (err) {
      return console.log("test err", err);
    }
  });

  return res.status(201).json({
    message: "You successfully confirm order",
  });
});
