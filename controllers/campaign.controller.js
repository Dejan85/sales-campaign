const { tryCatch } = require("../utils/index");
const {
  createCampaign,
  getCampaigns,
  getCampaign,
  updateCampaign,
  deleteCampaign,
} = require("../queries/index");

// create campaign
exports.createCampaign = tryCatch(async (req, res) => {
  const { name, slug, dateFrom, dateTo, active, promotionsGroup, price } =
    req.body;

  const response = await createCampaign({
    name,
    slug,
    dateFrom,
    dateTo,
    active,
    promotionsGroup,
    price,
  });

  if (!!response.affectedRows) {
    return res.status(201).json({
      message: "You successfully create campaign",
    });
  }

  throw {
    message: "Creating campaign fail",
  };
});

// get campaigns
exports.getCampaigns = tryCatch(async (req, res) => {
  const response = await getCampaigns();

  if (!!response?.length) {
    return res.status(200).json({
      message: "You get all campaign",
      data: response,
    });
  }

  throw {
    message: "You didn't find any campaigns",
    statusCode: 404,
    data: [],
  };
});

// update campaign
exports.updateCampaign = tryCatch(async (req, res) => {
  const { id } = req.params;
  const { name, slug, dateFrom, dateTo, active, promotionsGroup, price } =
    req.body;

  const campaign = await getCampaign(id);

  if (!!!campaign.length) {
    throw {
      message: `Campaign with id ${id} does not exist`,
      statusCode: 404,
      data: [],
    };
  }

  const response = await updateCampaign({
    id,
    name: name || (!!campaign.length && campaign[0].name),
    slug: slug || (!!campaign.length && campaign[0].slug),
    dateFrom: dateFrom || (!!campaign.length && campaign[0].dateFrom),
    dateTo: dateTo || (!!campaign.length && campaign[0].dateTo),
    active: active || (!!campaign.length && campaign[0].active),
    promotionsGroup:
      promotionsGroup || (!!campaign.length && campaign[0].promotionsGroup),
    price: price || (!!campaign.length && campaign[0].price),
  });

  if (!!response.affectedRows) {
    return res.status(201).json({
      message: "You updated campaign successfully",
    });
  }

  if (!!!response.affectedRows) {
    throw {
      statusCode: 400,
      message: "You cant update campaign",
    };
  }
});

//delete campaign
exports.deleteCampaign = tryCatch(async (req, res) => {
  const { id } = req.params;
  const response = await deleteCampaign(id);

  if (!!response.affectedRows) {
    return res.status(201).json({
      message: `You successfully delete campaign with id ${id}`,
    });
  }

  if (!!!response.affectedRows) {
    throw {
      message: `Campaign with id ${id} does not exist`,
      statusCode: 400,
    };
  }
});
