const express = require('express');
const router = express.Router();
const { topRestaurants } = require('../controllers/topRestaurantsController');

// GET /api/topRestaurants?city=Kakinada&latitude=17.0&longitude=82.0
router.get('/', topRestaurants);

module.exports = router;
