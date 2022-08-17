const express = require("express");
const campaign = require("./campaign.route");
const { globalErrorHandler } = require("../middleware/errors");
const router = express.Router();

router.use("/campaign", campaign);

router.use(globalErrorHandler);

module.exports = router;
