const { isBodyValid } = require("./isBodyValid.validator");
const { isSlugExists } = require("./isSlugExists.validator");

exports.campaignsValidators = {
  isBodyValid,
  isSlugExists,
};
