const express = require("express");
const router = express.Router();
const { orderConfirmation } = require("../controllers/order-confirmation");
const { globalValidators } = require("../middleware/global");

router.post("/", globalValidators.isEmailExist, orderConfirmation.create);
router.put("/:id", orderConfirmation.update);

module.exports = router;
