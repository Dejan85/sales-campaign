const express = require("express");
const { followersController } = require("../controllers/followers");
const {
  followersValidators: { isBodyValid },
} = require("../middleware/validators/followers");

const router = express.Router();

router
  .get("/", followersController.getAll)
  .post("/", isBodyValid, followersController.create)
  .delete("/:id", followersController.deleteById);

module.exports = router;
