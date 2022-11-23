const express = require("express");
const campaigns = require("./campaign.route");
const orders = require("./orders.route");
const followers = require("./followers.route");
const orderConfirmation = require("./orderConfirmation.js");
const { globalErrorHandler } = require("../middleware/errors");
const router = express.Router();

router.use("/campaigns", campaigns);
router.use("/orders", orders);
router.use("/followers", followers);
router.use("/order-confirmation", orderConfirmation);

router.use(globalErrorHandler);

module.exports = router;
