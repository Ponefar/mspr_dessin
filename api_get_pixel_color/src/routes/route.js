const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');
  
/* POST extract colors from image*/
router.post('/extractcolors', controller.getExtractedColors);

module.exports = router;
