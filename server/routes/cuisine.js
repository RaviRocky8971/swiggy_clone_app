const express = require('express');
const router = express.Router();
const {getCuisineData}  = require('../controllers/cuisineController'); // ✅ correct path

router.get('/', getCuisineData);

module.exports = router;
