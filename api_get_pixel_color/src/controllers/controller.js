const service = require('../services/service');

function getExtractedColors(req, res, next) {
  try {
    service.getExtractedColorsFromImage(req, res);
  } catch (err) {
    console.error(`Error while executing getExtractedColors`, err.message);
    next(err);
  }
}

module.exports = {
  getExtractedColors,
};
