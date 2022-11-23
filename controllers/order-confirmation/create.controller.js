const { tryCatch } = require("../../utils/index");
const nodemailer = require("nodemailer");

// create campaign
exports.create = tryCatch(async (req, res) => {
  const { email, id, model, quantity } = req.body;

  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "specijalna.ponuda.in.rs@gmail.com",
      pass: "fgfgqoqdudyoiumc",
    },
  });

  const details = {
    from: "specijalna.ponuda.in.rs@gmail.com",
    to: `${email}`,
    subject: "Verifikacioni email - Specijalna ponuda",
    html: `<div> <p>Poštovani, u nastavku se nalazi link za potvrdu rezervacije ${model} ${quantity} uređaja.</p></br><p>Link za potvrdu rezervacije: http://localhost:1234/order-confirm.html?${id}</p></div>`,
  };

  mailTransporter.sendMail(details, (err) => {
    if (err) {
      return console.log("test err", err);
    }
  });

  return res.status(201).json({
    message: "You successfully confirm order",
  });
});
