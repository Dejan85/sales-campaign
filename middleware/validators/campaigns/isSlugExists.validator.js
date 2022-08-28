const { tryCatch } = require("../../../utils");

const {
  campaignsQueries: { getAll, getBySlug },
} = require("../../../queries/campaigns");

exports.isSlugExists = tryCatch(async (req) => {
  const campaign = await getBySlug(req.body.slug);

  if (!!campaign.length) {
    throw {
      message: `Slug ${req.body.slug} already exist`,
      statusCode: 400,
    };
  }
});
