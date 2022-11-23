const { isIdValid } = require("./isIdValid.validator");
const { isEmailExist } = require("./isEmailExist.js");

exports.globalValidators = {
  isIdValid,
  isEmailExist,
};
