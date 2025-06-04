const express = require('express');
const router = express.Router();
const {getFilterRestaurant} = require('../controllers/filterRestaurantController');

router.get('/',getFilterRestaurant);

module.exports = router;
