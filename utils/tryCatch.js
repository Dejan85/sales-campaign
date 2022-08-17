const AppError = require("./AppError");

exports.tryCatch = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
    next();
  } catch (error) {
    next(new AppError(error));
  }
};
