const express = require("express");
const campaigns = require("./campaign.route");
const orders = require("./orders.route");
const { globalErrorHandler } = require("../middleware/errors");
const router = express.Router();

router.use("/campaigns", campaigns);
router.use("/orders", orders);

router.use(globalErrorHandler);

module.exports = router;
