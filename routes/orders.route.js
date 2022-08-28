const express = require("express");
const {
  ordersControllers: { create, getAll, deleteById },
} = require("../controllers/orders");
const {
  ordersValidators: { isBodyValid },
} = require("../middleware/validators/orders");
const {
  globalValidators: { isIdValid },
} = require("../middleware/global");
const router = express.Router();

router.get("/", getAll);
router.post("/", isBodyValid, create);
router.delete("/:id", isIdValid, deleteById);

module.exports = router;
