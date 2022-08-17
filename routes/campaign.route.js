const express = require("express");
const {
  createCampaign,
  getCampaigns,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaign.controller");
const {
  campaignValidator: { isBodyValid },
} = require("../middleware/validators");
const router = express.Router();

router.get("/", getCampaigns);
router.post("/", isBodyValid, createCampaign);
router.patch("/:id", updateCampaign);
router.delete("/:id", deleteCampaign);

module.exports = router;
