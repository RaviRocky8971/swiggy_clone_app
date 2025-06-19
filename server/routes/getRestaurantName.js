const express = require('express');
const router = express.Router();
const {getMasterItemsName}  = require('../controllers/getRestaurantNameController');

router.get('/', getMasterItemsName);

module.exports = router;
