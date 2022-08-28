const { tryCatch } = require("../../../utils");

const {
  campaignsQueries: { getAll },
} = require("../../../queries/campaigns");

exports.isSlugExists = tryCatch(async (req) => {
  const campaign = await getAll();

  if (!!campaign.length) {
    const testForDuplicate = campaign.some(
      (campaign) => campaign.slug === req.body.slug
    );

    if (testForDuplicate) {
      throw {
        message: `Slug ${req.body.slug} already exist`,
        statusCode: 400,
      };
    }
  } else {
    throw {
      message: `There are no any campaigns`,
      statusCode: 404,
    };
  }
});
