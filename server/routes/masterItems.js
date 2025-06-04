const express = require('express');
const router = express.Router();
const { getMasterItems } = require('../controllers/masterItemController');

router.get('/', getMasterItems);

module.exports = router;
