const { tryCatch } = require("../../../utils");

const {
  campaignsQueries: { getBySlug },
} = require("../../../queries/campaigns");

const { CampaignsModel } = require("../../../models/campaigns.model");

exports.isSlugExists = tryCatch(async (req) => {
  // const campaign = await getBySlug(req.body.slug);

  const slug = await CampaignsModel.find({ slug: req.body.slug });

  if (slug.length !== 0) {
    throw {
      message: `Slug ${req.body.slug} already exist`,
      statusCode: 400,
    };
  }
});
