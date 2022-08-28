const express = require("express");
const { campaignsController } = require("../controllers/campaigns/index");
const {
  campaignsValidators: { isBodyValid, isSlugExists },
} = require("../middleware/validators/campaigns");
const {
  globalValidators: { isIdValid },
} = require("../middleware/global");
const router = express.Router();

router
  .get("/", campaignsController.getAll)
  .get("/byId/:id", campaignsController.getById)
  .get("/bySlug/:slug", campaignsController.getBySlug)
  .post("/", isBodyValid, isSlugExists, campaignsController.create)
  .patch("/:id", isIdValid, isBodyValid, campaignsController.update)
  .delete("/:id", campaignsController.deleteById);

module.exports = router;
